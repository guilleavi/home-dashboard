import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient, Product, ProductInstance } from "@prisma/client"
import { ProductSummary, ProductToSave } from "@custom-types/product"
import { assertIsString } from "@asserts/primitives"

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { query: { name }, body, method } = req

  assertIsString(name)

  switch (method) {
    case 'GET':
      res.send(await getProduct(name))
      break
    case 'POST':
      await saveProduct(body)
      res.send({})
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

const getProduct = async (name: string): Promise<ProductSummary | null> => {
  const product = await prisma.product.findUnique({
    where: { name: name },
    include: {
      instances: {
        orderBy: {
          expirationDate: "asc",
        },
      },
    },
  })

  if (product) {
    let nextToExpireDate = ""
    let nextToExpireUnits = 0

    if (product.instances?.length) {
      nextToExpireDate = product.instances[0].expirationDate // asc order
      nextToExpireUnits = product.instances
        .filter((instance) => instance.expirationDate === nextToExpireDate)
        .reduce((p, c) => p + c.units, 0)
    }

    const productResponse = {
      name: product.name,
      howLongToFreeze: product.monthsToExpire,
      nextToExpireDate,
      nextToExpireUnits,
    }

    return productResponse
  }

  return product
}

const saveProduct = async (body: ProductToSave) => {
  const { name, howLongToFreeze, storageDate, units } = body

  const product = await prisma.product.findUnique({
    where: { name: name }
  })

  // Check if the product is new, in that case, insert a new product
  if (!product) {
    await prisma.product.create({
      data: {
        name: name as string,
        monthsToExpire: howLongToFreeze as number,
      } as Product
    })
  } else {
    // If the product already exists, update the howLongToFreeze value if it changes
    if (product.monthsToExpire !== howLongToFreeze) {
      await prisma.product.update({
        data: {
          monthsToExpire: howLongToFreeze
        },
        where: { name: name }
      })
    }
  }

  if (units) {
    // Create a new product instance
    const storageDateToDate = new Date(storageDate)
    storageDateToDate.setDate(storageDateToDate.getDate() + 1)

    await prisma.productInstance.create({
      data: {
        name: name as string,
        units: units as number,
        expirationDate: storageDateToDate.toLocaleDateString()
      } as ProductInstance
    })
  }
}