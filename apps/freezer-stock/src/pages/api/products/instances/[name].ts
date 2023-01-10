import {
  ProductDetailsCustomRequest,
  ProductWithInstances,
} from "@custom-types/api"
import { PrismaClient } from "@custom-types/prisma/generated/client"
import type { ProductDetails } from "@custom-types/product"
import { HttpMethod, Order, StatusCode } from "@enums/api"
import type { NextApiResponse } from "next"

const prisma = new PrismaClient()

const handleProductInstances = async (
  req: ProductDetailsCustomRequest,
  res: NextApiResponse<Array<ProductDetails> | null>,
) => {
  const {
    query: { name },
    body,
    method,
  } = req

  switch (method) {
    case HttpMethod.GET:
      res.send(await getProductInstances(name))
      break
    case HttpMethod.PUT:
      await updateIntanceUnits(body)
      res.send(null)
      break
    default:
      res.setHeader("Allow", [HttpMethod.GET, HttpMethod.PUT])
      res.status(StatusCode.NOT_ALLOW).end(`Method ${method} Not Allowed`)
  }
}

const getProductInstances = async (
  name: string,
): Promise<Array<ProductDetails>> => {
  const product: ProductWithInstances | null = await prisma.product.findUnique({
    where: { name },
    include: {
      instances: {
        orderBy: {
          expirationDate: Order.ASC,
        },
      },
    },
  })

  if (product?.instances.length) {
    return product.instances
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
