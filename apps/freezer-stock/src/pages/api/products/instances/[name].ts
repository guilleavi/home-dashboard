import { assertIsString } from "@asserts/primitives"
import { ProductDetails } from "@custom-types/product"
import { PrismaClient } from "@prisma/client"
import { getProductDetails } from "@utils/api"
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

const handleProductInstances = async (
  req: NextApiRequest,
  res: NextApiResponse<Array<ProductDetails> | null>,
) => {
  const {
    query: { name },
    body,
    method,
  } = req

  assertIsString(name)

  switch (method) {
    case "GET":
      res.send(await getProductInstances(name))
      break
    case "PUT":
      await updateIntanceUnits(body)
      res.send(null)
      break
    default:
      res.setHeader("Allow", ["GET", "PUT"])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

const getProductInstances = async (name: string): Promise<ProductDetails[]> => {
  const product = await prisma.product.findUnique({
    where: { name },
    include: {
      instances: {
        orderBy: {
          expirationDate: "asc",
        },
      },
    },
  })

  if (product && product.instances?.length) {
    return getProductDetails(product.instances)
  }

  return [] as Array<ProductDetails>
}

const updateIntanceUnits = async ({ instanceId, units }: ProductDetails) => {
  try {
    await prisma.productInstance.update({
      data: {
        units,
      },
      where: { instanceId },
    })
  } catch (e: unknown) {
    console.error(
      `Error updating the units for the instanceId '${instanceId}'`,
      e,
    )
  }
}

export default handleProductInstances
