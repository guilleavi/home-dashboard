import {
  ProductSummary,
  NewProduct,
  ProductDetails,
  ProductToSave,
} from "@custom-types/product"
import axios from "axios"

type GetProduct = {
  abortSignal: AbortSignal
  name: string
}

export const getProduct = async ({
  abortSignal,
  name,
}: GetProduct): Promise<ProductSummary> => {
  const url = `/api/products/${name}`
  const defaultValue = new NewProduct(name)

  try {
    const response = await axios.get<ProductSummary>(url, {
      signal: abortSignal,
    })

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
    return (await axios.get(`/api/products/instances/${name}`))
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
    return (await axios.get(`/api/products/instances`))
      .data as Array<ProductDetails>
  } catch (e: unknown) {
    console.log(e)
    return []
  }
}

export const saveProduct = async (newProductItem: ProductToSave) => {
  const postStatus = await axios.post(
    `/api/products/${newProductItem.name}`,
    newProductItem,
  )
}
