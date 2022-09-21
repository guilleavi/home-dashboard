import { ProductContext } from "contexts/ProductProvider"
import React, { useContext, useEffect, useRef, useState } from "react"
import { getProduct } from "services/products"
import { ProductActionType } from "types/state"

const SearchInput = () => {
  const {
    state: {
      storagedProduct: { name },
    },
    dispatch,
  } = useContext(ProductContext)
  const inputRef = useRef<HTMLInputElement>(null)
  const [typedName, setTypedName] = useState("")

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

    fetchProduct(typedName, abortController.signal).catch((err) =>
      console.error(err),
    )

    return () => {
      // make sure that the previous call gets canceled before doing a new fetch
      abortController.abort()
    }
  }, [dispatch, typedName])

  useEffect(() => {
    setTypedName(name)
    if (inputRef.current) {
      inputRef.current.value = name
    }
  }, [name])

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement> & {
      target: HTMLInputElement
    },
  ) => {
    if (event.key === "Enter") {
      setTypedName(event.target.value)
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
