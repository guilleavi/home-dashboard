import { ProductSummary } from "@custom-types/product"
import { getProduct } from "@services/products"
import { useEffect, useState } from "react"

const useFetchProduct = (productToSearch: string) => {
  const [fetchedProduct, setFetchedProduct] = useState<ProductSummary>(
    {} as ProductSummary,
  )

  useEffect(() => {
    const abortController = new AbortController()

    // TODO: use SWR - NextJS hook to fetch data and cache it
    const fetchProduct = async (
      productName: string,
      abortSignal: AbortSignal,
    ) => {
      setFetchedProduct(await getProduct(productName, abortSignal))
    }

    if (productToSearch.trim()) {
      fetchProduct(productToSearch, abortController.signal).catch((err) =>
        console.error(err),
      )
    }

    return () => {
      // cancel all previous calls to fetch a product
      abortController.abort()
    }
  }, [productToSearch])

  return fetchedProduct
}

export default useFetchProduct
