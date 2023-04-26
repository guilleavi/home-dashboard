import type {
  ProductDetails,
  ProductSummary,
  ProductToSave,
} from "@custom-types/product"
import { NewProduct } from "@custom-types/product"
import axios from "axios"

const PRODUCT_URL = "/api/products"
const INSTANCE_URL = `${PRODUCT_URL}/instances`

/**
 * Get Product data with units to expire soon
 * @param name - product name to search
 * @param abortSignal - signal to abort previous fetchs
 * @returns - product data with the amount of units that are going to expire sooner
 */
export const getProduct = async (
  name: string,
  abortSignal: AbortSignal,
): Promise<ProductSummary> => {
  const url = `${PRODUCT_URL}/${name}`
  const defaultValue = new NewProduct(name)

  try {
    const response = await axios.get<ProductSummary>(url, {
      signal: abortSignal,
    })

    /*
     * If the product does not exits in the db,
     * return template with default data to create new product
     */
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return response.data || defaultValue
  } catch (e: unknown) {
    console.log(e)
    return defaultValue
  }
}

/**
 * Get all the instances for a specific product
 * @param name - product to get its instances
 * @returns - all the instances
 */
export const getProductDetails = async (
  name: string,
): Promise<Array<ProductDetails>> => {
  try {
    return (await axios.get(`${INSTANCE_URL}/${name}`))
      .data as Array<ProductDetails>
  } catch (e: unknown) {
    console.log(e)
    return []
  }
}

/**
 * Get all the instances for all the products
 * @returns - all the products with all their instances
 */
export const getAllProductDetails = async (): Promise<
  Array<ProductDetails>
> => {
  try {
    return (await axios.get(`${INSTANCE_URL}`)).data as Array<ProductDetails>
  } catch (e: unknown) {
    console.log(e)
    return []
  }
}

/**
 * Add or Update a product and its instances
 * @param newProductItem - data to save
 */
export const saveProduct = async (newProductItem: ProductToSave) => {
  try {
    await axios.post(`${PRODUCT_URL}/${newProductItem.name}`, newProductItem)
  } catch (e: unknown) {
    console.log(e)
  }
}
