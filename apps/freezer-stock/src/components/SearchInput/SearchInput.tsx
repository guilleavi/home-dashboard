import { assertIsString } from "@asserts/primitives"
import type { ReactKeyboardEvent } from "@custom-types/dom"
import { Key } from "@enums/common"
import useFetchProduct from "@hooks/useFetchProduct"
import { useAppDispatch } from "@store/hooks"
import { cleanUp, get } from "@store/productSlice"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "./SearchInput.module.css"

interface SearchInputProps {
  onShowSpinner: (show: boolean) => void
}

const SearchInput = ({ onShowSpinner }: SearchInputProps) => {
  /*
   * When the user goes to the details page and comes back to the search page,
   * show the last search results
   */
  const router = useRouter()
  const queryParamName = router.query["name"] ?? ""
  /* queryParamName type could be string || string[] */
  assertIsString(queryParamName)

  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState("")
  const [productToSearch, setProductToSearch] = useState(queryParamName)
  const fetchedProduct = useFetchProduct(productToSearch)

  useEffect(() => {
    if (queryParamName) {
      setProductToSearch(queryParamName)
    }
  }, [queryParamName])

  useEffect(() => {
    if (fetchedProduct.name) {
      dispatch(get(fetchedProduct))
      setProductToSearch("")
      onShowSpinner(false)
    }
  }, [fetchedProduct, dispatch, onShowSpinner])

  const handleKeyDown = ({ key }: ReactKeyboardEvent) => {
    /* Trigger search and leave the input cleared for a future search */
    if (key === Key.ENTER) {
      onShowSpinner(true)
      dispatch(cleanUp())
      setProductToSearch(inputValue)
      setInputValue("")
    }
  }

  return (
    <input
      className={styles["search-bar"]}
      placeholder="Search..."
      type="search"
      value={inputValue}
      aria-label="Search product"
      onChange={(e) => setInputValue(e.target.value.toLowerCase())}
      onKeyDown={handleKeyDown}
    />
  )
}

export default SearchInput
