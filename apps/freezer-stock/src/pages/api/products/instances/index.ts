import type { ProductDetails } from "@custom-types/product"
import { ORDER } from "@enums/api"
import { PrismaClient } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

const getAllInstances = async (
  req: NextApiRequest,
  res: NextApiResponse<Array<ProductDetails>>,
) => {
  const allProducts = await prisma.product.findMany({
    orderBy: {
      name: ORDER.ASC,
    },
    include: {
      instances: {
        orderBy: {
          expirationDate: ORDER.ASC,
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
