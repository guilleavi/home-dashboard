import {
  PrismaClient,
  ProductInstance,
} from "@custom-types/prisma/generated/client"
import type { ProductSummary, ProductToSave } from "@custom-types/product"
import { Order } from "@enums/api"

const prisma = new PrismaClient()

/**
 * Get Product data with units to expire soon
 * @param name - product name to search
 * @returns - product data with the amount of units that are going to expire sooner
 */
export const getProductWithNextToExpireUnits = async (
  name: string,
): Promise<ProductSummary | null> => {
  const product = await prisma.product.findUnique({
    where: { name },
    include: {
      instances: {
        orderBy: {
          storageDate: Order.ASC,
        },
      },
    },
  })

  if (product) {
    /* Default expiration values if there is no instances */
    let nextToExpireDate = new Date()
    let nextToExpireUnits = 0

    if (product.instances.length) {
      const oldestStorageDate = product.instances[0].storageDate // asc order

      // TODO: move this repeated logic to util
      const expirationDate = new Date(oldestStorageDate)
      /* Expiration Date = Storage Date + How Many Months Can Be Freezed */
      expirationDate.setMonth(
        expirationDate.getMonth() + product.monthsToFreeze,
      )
      nextToExpireDate = expirationDate

      /*
       * Having the oldest instance and filter all the instances
       * with the same storage to calculate the units
       * that are going to expire sooner
       */
      nextToExpireUnits = product.instances
        .filter(
          (instance: ProductInstance) =>
            instance.storageDate.toDateString() ===
            oldestStorageDate.toDateString(),
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

  return product // null
}

/**
 * Add or Update a product and its instances
 * @param body - ProductToSave
 */
export const saveProduct = async (body: ProductToSave) => {
  // TODO: add all the logic inside a single transaction
  const { name, monthsToFreeze, storageDate, units } = body

  const product = await prisma.product.findUnique({
    where: { name },
  })

  try {
    /* If the product already exists, update the monthsToFreeze value ONLY if it changed */
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
      /* If the product doesn't exist, insert a new product */
      await prisma.product.create({
        data: {
          name,
          monthsToFreeze,
        },
      })
    }

    /* If there are instances, create them */
    if (units) {
      await prisma.productInstance.create({
        data: {
          name,
          storageDate: new Date(storageDate),
          units,
        },
      })
    }
  } catch (e: unknown) {
    console.error(`Error saving the product '${name}'`, e)
  }
}
