import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import { ProductDetails } from "@custom-types/product"
import { assertIsString } from "@asserts/primitives"

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductDetails[] | null>,
) {
  // TODO: fix date order
  const products = await prisma.product.findMany({
    include: {
      instances: {
        orderBy: {
          expirationDate: "asc",
        },
      },
    },
  })

  if (products) {
    interface ProductDetails {
      name: string
      expirationDate: string
      units: number
    }
    const productInstancesResponse: Array<ProductDetails> = []

    products.forEach((product) => {
      if (product.instances?.length) {
        product.instances.forEach((instance) =>
          productInstancesResponse.push({
            name: instance.name,
            expirationDate: instance.expirationDate,
            units: instance.units,
          }),
        )
      }
    })

    res.send(productInstancesResponse)
    return
  }

  res.send(null)
}
