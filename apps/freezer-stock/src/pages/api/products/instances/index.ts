import { PrismaClient } from "@custom-types/prisma/generated/client"
import type { ProductDetails } from "@custom-types/product"
import { Order } from "@enums/api"
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

const getAllInstances = async (
  req: NextApiRequest,
  res: NextApiResponse<Array<ProductDetails>>,
) => {
  const allProducts = await prisma.product.findMany({
    orderBy: {
      name: Order.ASC,
    },
    include: {
      instances: {
        orderBy: {
          expirationDate: Order.ASC,
        },
      },
    },
  })

  if (allProducts.length) {
    const allProductsDetails: Array<ProductDetails> = []

    allProducts.forEach((product) => {
      allProductsDetails.push(...product.instances)
    })

    res.send(allProductsDetails)
    return
  }

  res.send([] as Array<ProductDetails>)
}

export default getAllInstances
