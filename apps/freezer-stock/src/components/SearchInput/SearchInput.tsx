import { ProductContext } from "@contexts/ProductProvider"
import type { ReactKeyboardEvent } from "@custom-types/dom"
import { ProductActionType } from "@custom-types/state"
import { KEY } from "@enums/common"
import { getProduct } from "@services/products"
import { useContext, useEffect, useRef, useState } from "react"
import styles from "./SearchInput.module.scss"

const SearchInput = () => {
  const { dispatch } = useContext(ProductContext)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [typedName, setTypedName] = useState("")

  useEffect(() => {
    const abortController = new AbortController()

    const fetchProduct = async (name: string, abortSignal: AbortSignal) => {
      const fetchedProduct = await getProduct(name, abortSignal)
      console.log("Testing Input:", fetchedProduct)
      dispatch({
        type: ProductActionType.GET_PRODUCT,
        payload: fetchedProduct,
      })
    }

    if (typedName.trim()) {
      fetchProduct(typedName, abortController.signal).catch((err) =>
        console.error(err),
      )
    }

    return () => {
      // cancel all previos fetch calls
      abortController.abort()
    }
  }, [dispatch, typedName])

  const handleKeyDown = ({ key, target }: ReactKeyboardEvent) => {
    if (key === KEY.ENTER) {
      setTypedName(target.value.toLowerCase())

      searchInputRef.current!.value = ""
    }
  }

  return (
    <input
      aria-label="Search product"
      className={styles["search-bar"]}
      placeholder="Search..."
      ref={searchInputRef}
      type="search"
      onKeyDown={handleKeyDown}
    />
  )
}

export default SearchInput
