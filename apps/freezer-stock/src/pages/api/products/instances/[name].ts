import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import { ProductDetails } from "@custom-types/product"
import { assertIsString } from "@asserts/primitives"

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductDetails[] | null>,
) {
  const { name } = req.query

  assertIsString(name)

  const product = await prisma.product.findUnique({
    where: { name: name },
    include: {
      instances: {
        orderBy: {
          expirationDate: 'asc'
        }
      },
    },
  })

  if (product && product.instances?.length) {
    interface ProductDetails {
      name: string
      expirationDate: string
      units: number
    }

    const productInstancesResponse: Array<ProductDetails> = []

    product.instances.forEach(instance => productInstancesResponse.push({
      name: instance.name,
      expirationDate: instance.expirationDate,
      units: instance.units
    }))

    res.send(productInstancesResponse)
    return
  }

  res.send(null)
}
