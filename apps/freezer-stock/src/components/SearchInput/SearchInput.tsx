import { ProductContext } from "@contexts/ProductProvider"
import type { ReactKeyboardEvent } from "@custom-types/dom"
import type { ProductActionType } from "@custom-types/state"
import { getProduct } from "@services/products"
import { useContext, useRef, useState, useEffect } from "react"
import styles from "./SearchInput.module.scss"

const SearchInput = () => {
  const {
    state: {
      storagedProduct: { name },
    },
    dispatch,
  } = useContext(ProductContext)
  const searchInputRef = useRef<HTMLInputElement>(null)
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

  const handleKeyDown = ({ key, target: { value } }: ReactKeyboardEvent) => {
    if (key === "Enter") {
      setTypedName(value.toLowerCase())

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
