import { assertIsString } from "@asserts/primitives"
import { ProductContext } from "@contexts/ProductProvider"
import type { ReactKeyboardEvent } from "@custom-types/dom"
import { Key } from "@enums/common"
import useFetchProduct from "@hooks/useFetchProduct"
import { ProductActionType } from "@state/actions"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import styles from "./SearchInput.module.scss"

interface SearchInputProps {
  onShowSpinner: (show: boolean) => void
}

// FIXME: if you save a product and after that you search for that product again, it doesn't work
const SearchInput = ({ onShowSpinner }: SearchInputProps) => {
  /* 
   * When the user goes to the details page and comes back to the search page, 
   * show the last search results
   */
  const router = useRouter()
  const queryParamName = router.query["name"] ?? ""
  /* queryParamName type could be string || string[] */
  assertIsString(queryParamName)

  const { dispatch } = useContext(ProductContext)
  const [inputValue, setInputValue] = useState("")
  const [productToSearch, setProductToSearch] = useState(queryParamName)
  const fetchedProduct = useFetchProduct(productToSearch)

  useEffect(() => {
    if (fetchedProduct.name) {
      dispatch({
        type: ProductActionType.GET_PRODUCT,
        payload: fetchedProduct,
      })
      onShowSpinner(false)
    }
  }, [fetchedProduct])

  const handleKeyDown = ({ key }: ReactKeyboardEvent) => {
    /* Trigger search and leave the input cleared for a future search */
    if (key === Key.ENTER) {
      onShowSpinner(true)
      dispatch({
        type: ProductActionType.CLEAR_PRODUCT,
      })
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
