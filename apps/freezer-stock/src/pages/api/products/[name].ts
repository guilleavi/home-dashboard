import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import { assertIsString } from "../../../asserts/primitives"
import { Product } from "../../../types/product"

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product>,
) {
  const { name } = req.query

  assertIsString(name)

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

    console.log(product.instances)

    if (product.instances?.length) {
      nextToExpireDate = product.instances[0].expirationDate
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

    res.send(productResponse, { depth: null })
  }

  res.send(product, { depth: null })
}
