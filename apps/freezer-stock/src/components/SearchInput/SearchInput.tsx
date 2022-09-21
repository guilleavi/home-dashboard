import { ProductContext } from "contexts/ProductProvider"
import React, { useContext, useEffect, useRef, useState } from "react"
import { getProduct } from "services/products"
import { ProductActionType } from "types/state"

const SearchInput = () => {
  const [name, setName] = useState("")
  const { dispatch } = useContext(ProductContext)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const abortController = new AbortController()

    const fetchProduct = async (name: string, abortSignal: AbortSignal) => {
      const fetchedProduct = await getProduct({
        name,
        abortSignal,
      })
      dispatch({
        type: ProductActionType.GET_PRODUCT,
        payload: fetchedProduct,
      })
    }

    fetchProduct(name, abortController.signal).catch((err) =>
      console.error(err),
    )

    return () => {
      // make sure that the previous call gets canceled before doing a new fetch
      abortController.abort()
    }
  }, [dispatch, name])

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement> & {
      target: HTMLInputElement
    },
  ) => {
    if (event.key === "Enter") {
      setName(event.target.value)
      // clean input
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
