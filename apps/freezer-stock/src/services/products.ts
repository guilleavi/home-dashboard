import type {
  ProductDetails,
  ProductSummary,
  ProductToSave,
} from "@custom-types/product"
import { NewProduct } from "@custom-types/product"
import axios from "axios"

const PRODUCT_URL = "/api/products"
const INSTANCE_URL = `${PRODUCT_URL}/instances`

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

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return response.data || defaultValue
  } catch (e: unknown) {
    console.log(e)
    return defaultValue
  }
}

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

export const saveProduct = async (newProductItem: ProductToSave) => {
  try {
    await axios.post(`${PRODUCT_URL}/${newProductItem.name}`, newProductItem)
  } catch (e: unknown) {
    console.log(e)
  }
}
