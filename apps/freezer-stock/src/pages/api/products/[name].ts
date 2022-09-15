import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import { ProductSummary } from "@custom-types/product"
import { assertIsString } from "@asserts/primitives"

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductSummary | null>,
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

    res.send(productResponse)
    return
  }

  res.send(product)
}
