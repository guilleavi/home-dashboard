import { ProductContext } from "contexts/ProductProvider"
import React, { useCallback, useContext, useEffect, useRef } from "react"
import { getProduct } from "services/products"
import { ProductActionType } from "types/state"

const SearchInput = () => {
  const {
    state: {
      newProductItem: { name: selectedProductName },
    },
    dispatch,
  } = useContext(ProductContext)
  const inputRef = useRef<HTMLInputElement>(null)

  // DO NOT REMOVE THE useCallback. Without it, this function will be recreated with every re-render
  // and that will trigger the useEffect
  const fetchProduct = useCallback(
    async (signal: AbortSignal) => {
      const fetchedProduct = await getProduct({
        name: selectedProductName,
        abortSignal: signal,
      })
      dispatch({
        type: ProductActionType.GET_PRODUCT,
        payload: fetchedProduct,
      })
    },
    [dispatch, selectedProductName],
  )

  useEffect(() => {
    const abortController = new AbortController()
    fetchProduct(abortController.signal).catch((err) => console.error(err))

    return () => {
      // make sure that the previous call gets canceled before doing a new fetch
      abortController.abort()
    }
  }, [fetchProduct, selectedProductName])

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement> & {
      target: HTMLInputElement
    },
  ) => {
    if (event.key === "Enter") {
      dispatch({
        type: ProductActionType.UPDATE_PRODUCT,
        payload: { key: "name", value: event.target.value },
      })
      if (inputRef.current) {
        inputRef.current.value = ""
      }
    }
  }

  return (
    <input
      type="search"
      placeholder="Search..."
      aria-label="Search product"
      onKeyDown={handleKeyDown}
      ref={inputRef}
    />
  )
}

export default SearchInput
