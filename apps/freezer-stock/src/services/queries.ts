import {
  PrismaClient,
  ProductInstance,
} from "@custom-types/prisma/generated/client"
import { ProductWithInstances } from "@custom-types/api"
import type {
  ProductDetails,
  ProductSummary,
  ProductToSave,
} from "@custom-types/product"
import { Order } from "@enums/api"

const prisma = new PrismaClient()

export const getAllInstances = async () => {
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

    return allProductsDetails
  }

  return [] as Array<ProductDetails>
}

export const getProductInstances = async (
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

export const updateIntanceUnits = async ({
  instanceId,
  units,
}: ProductDetails) => {
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

export const getNextToExpire = async (
  name: string,
): Promise<ProductSummary | null> => {
  const product = await prisma.product.findUnique({
    where: { name },
    include: {
      instances: {
        orderBy: {
          expirationDate: Order.ASC,
        },
      },
    },
  })

  if (product) {
    let nextToExpireDate = new Date()
    let nextToExpireUnits = 0

    if (product.instances.length) {
      nextToExpireDate = product.instances[0].expirationDate // asc order
      nextToExpireUnits = product.instances
        .filter(
          (instance: ProductInstance) =>
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

export const saveProduct = async (body: ProductToSave) => {
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
