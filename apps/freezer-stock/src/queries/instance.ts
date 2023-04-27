import { ProductWithInstances } from "@custom-types/api"
import {
  PrismaClient
} from "@custom-types/prisma/generated/client"
import type {
  ProductDetails
} from "@custom-types/product"
import { Order } from "@enums/api"

const prisma = new PrismaClient()

/**
 * Get only the name for all the products
 * @returns - product names
 */
export const getAllProductsName = async () => {
  const allProducts = await prisma.product.findMany({
    orderBy: {
      name: Order.ASC,
    },
  })

  return allProducts.map((product) => product.name)
}

/**
 * Get all the instances for all the products
 * @returns - all the products with all their instances
 */
export const getAllInstances = async () => {
  const allProducts = await prisma.product.findMany({
    orderBy: {
      name: Order.ASC,
    },
    include: {
      instances: {
        orderBy: {
          storageDate: Order.ASC,
        },
      },
    },
  })

  if (allProducts.length) {
    const allProductsDetails: Array<ProductDetails> = []

    allProducts.forEach((product) => {
      product.instances.forEach((instance) => {
        // TODO: move this repeated logic to util
        const expirationDate = new Date(instance.storageDate)
        expirationDate.setMonth(expirationDate.getMonth() + product.monthsToFreeze)

        allProductsDetails.push({
          ...instance,
          expirationDate
        })
      })
    })

    return allProductsDetails
  }

  return [] as Array<ProductDetails>
}

/**
 * Get all the instances for a specific product
 * @param name - product to get its instances
 * @returns - all the instances
 */
export const getProductInstances = async (
  name: string,
): Promise<Array<ProductDetails>> => {
  const product: ProductWithInstances | null = await prisma.product.findUnique({
    where: { name },
    include: {
      instances: {
        orderBy: {
          storageDate: Order.ASC,
        },
      },
    },
  })

  if (product?.instances.length) {
    const productDetails: Array<ProductDetails> = []

    product.instances.forEach((instance) => {
      // TODO: move this repeated logic to util
      const expirationDate = new Date(instance.storageDate)
      expirationDate.setMonth(expirationDate.getMonth() + product.monthsToFreeze)

      productDetails.push({
        ...instance,
        expirationDate
      })
    })

    return productDetails
  }

  return [] as Array<ProductDetails>
}

/**
 * Update the units for a specific instance, when they are removed from the freezer
 * @param instance - instance to update
 */
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
