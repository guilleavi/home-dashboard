import { ProductSummary } from "@custom-types/product"
import { getProduct } from "@services/products"
import { useEffect, useState } from "react"

const useFetchProduct = (searchedValue: string) => {
  const [fetchedProduct, setFetchedProduct] = useState<ProductSummary>()

  useEffect(() => {
    const abortController = new AbortController()

    // TODO: use SWR - NextJS hook to fetch data and cache it
    const fetchProduct = async (
      productName: string,
      abortSignal: AbortSignal,
    ) => {
      // setShowSpinner(true)
      // dispatch({
      // 	type: ProductActionType.CLEAR_PRODUCT,
      // })

      setFetchedProduct(await getProduct(productName, abortSignal))

      // setShowSpinner(false)
    }

    if (searchedValue.trim()) {
      fetchProduct(searchedValue, abortController.signal).catch((err) =>
        console.error(err),
      )
    }

    return () => {
      // cancel all previos fetch calls
      abortController.abort()
    }
  }, [searchedValue])

  return fetchedProduct
}

export default useFetchProduct
