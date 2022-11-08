import { assertIsString } from "@asserts/primitives"
import type { ProductSummary, ProductToSave } from "@custom-types/product"
import { HTTP_METHOD } from "@enums/api"
import { PrismaClient } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

const handleProduct = async (
  req: NextApiRequest,
  res: NextApiResponse<ProductSummary | null>,
) => {
  const {
    query: { name },
    body,
    method,
  } = req

  assertIsString(name)

  switch (method) {
    case HTTP_METHOD.GET:
      res.send(await getNextToExpire(name))
      break
    case HTTP_METHOD.POST:
      await saveProduct(body)
      res.send(null)
      break
    default:
      res.setHeader("Allow", [HTTP_METHOD.GET, HTTP_METHOD.POST])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

const getNextToExpire = async (
  name: string,
): Promise<ProductSummary | null> => {
  const product = await prisma.product.findUnique({
    where: { name },
    include: {
      instances: {
        orderBy: {
          expirationDate: ORDER.ASC,
        },
      },
    },
  })

  if (product) {
    let nextToExpireDate = new Date()
    let nextToExpireUnits = 0

    if (product.instances?.length) {
      nextToExpireDate = product.instances[0].expirationDate // asc order
      nextToExpireUnits = product.instances
        .filter(
          (instance) =>
            instance.expirationDate.toDateString() ===
            nextToExpireDate.toDateString(),
        )
        .reduce((p, c) => p + c.units, 0)
    }

    const productResponse = {
      name: product.name,
      monthsToFreeze: product.monthsToFreeze,
      nextToExpireDate,
      nextToExpireUnits,
    }

    return productResponse
  }

  return product
}

const saveProduct = async (body: ProductToSave) => {
  const { name, monthsToFreeze, storageDate, units } = body

  const product = await prisma.product.findUnique({
    where: { name },
  })

  try {
    // If the product already exists, update the monthsToFreeze value ONLY if it changed
    if (product) {
      if (product.monthsToFreeze !== monthsToFreeze) {
        await prisma.product.update({
          data: {
            monthsToFreeze,
          },
          where: { name },
        })
      }
    } else {
      // If the product doesn't exist, insert a new product
      await prisma.product.create({
        data: {
          name,
          monthsToFreeze,
        },
      })
    }

    // Create new instances
    if (units) {
      const expirationDate = new Date(storageDate)
      // Expiration Date = Storage Date + How Many Months Can Be Freezed
      expirationDate.setMonth(expirationDate.getMonth() + monthsToFreeze)

      await prisma.productInstance.create({
        data: {
          name,
          expirationDate,
          units,
        },
      })
    }
  } catch (e: unknown) {
    console.error(`Error saving the product '${name}'`, e)
  }
}

export default handleProduct
