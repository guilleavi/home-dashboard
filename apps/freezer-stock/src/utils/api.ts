import type { ProductDetails } from "@custom-types/product"
import type { ProductInstance } from "@prisma/client"

export const getProductDetails = (instances: Array<ProductInstance>) => {
  const allInstancesDetails: Array<ProductDetails> = []

  instances.forEach((instance) => {
    const { instanceId, name, expirationDate, units } = instance
    allInstancesDetails.push({
      instanceId,
      name,
      expirationDate,
      units,
    })
  })

  return allInstancesDetails
}
