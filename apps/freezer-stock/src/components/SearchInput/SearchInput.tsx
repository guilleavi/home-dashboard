import { ProductContext } from "contexts/ProductProvider"
import React, { useContext, useRef } from "react"
import { ProductActionType } from "types/state"

const SearchInput = () => {
  const { dispatch } = useContext(ProductContext)
  const inputRef = useRef<HTMLInputElement>(null)

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
