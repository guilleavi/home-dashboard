import axios from "axios"
import {
  ProductSummary,
  NewProduct,
  ProductToSave,
  ProductDetails,
} from "types/product"
import { fetch } from "utils/fetch"

type GetProduct = {
  abortSignal: AbortSignal
  name: string
}

export const getProduct = async ({
  abortSignal,
  name,
}: GetProduct): Promise<ProductSummary
> => {
  return name
    ? await fetch<ProductSummary
    >({
      abortSignal,
      defaultValue: new NewProduct(name),
      url: `/api/products/${name}`,
    })
    : new NewProduct("")
}

export const getProductDetails = async ({
  abortSignal,
  name,
}: GetProduct): Promise<Array<ProductDetails>> =>
  await axios.get(`/api/products/intances/${name}`, {
    signal: abortSignal,
  })

export const saveProduct = async (newProductItem: ProductToSave) => {
  const postStatus = await axios.post(
    `/api/products/${newProductItem.name}`,
    newProductItem,
  )
}

