import axios from "axios"
import {
  ProductSummary,
  NewProduct,
  ProductToSave,
  ProductDetails,
} from "types/product"
import { safeFetch } from "utils/fetch"

interface GetProduct {
  abortSignal: AbortSignal
  name: string
}

const getProduct = async ({
  abortSignal,
  name,
}: GetProduct): Promise<ProductSummary
> => {
  return name
    ? await safeFetch<ProductSummary
    >({
      abortSignal,
      defaultValue: new NewProduct(name),
      url: `https://localhost:3000/api/products/${name}`,
    })
    : new NewProduct("")
}

const getProductDetails = async ({
  abortSignal,
  name,
}: GetProduct): Promise<Array<ProductDetails>> =>
  await axios.get(`https://localhost:3000/api/products/intances/${name}`, {
    signal: abortSignal,
  })

const saveProduct = async (newProductItem: ProductToSave) => {
  const postStatus = await axios.post(
    `https://localhost:3000/api/products/${newProductItem.name}`,
    newProductItem,
  )
}

export { getProduct, getProductDetails, saveProduct }
