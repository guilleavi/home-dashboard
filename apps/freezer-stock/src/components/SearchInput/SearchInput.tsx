import type { ReactKeyboardEvent } from "@custom-types/dom"
import { Key } from "@enums/common"
import { useState } from "react"
import styles from "./SearchInput.module.scss"

type SearchInputProps = {
  onSearch: (inputValue: string) => void
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState("")

  const handleKeyDown = ({ key }: ReactKeyboardEvent) => {
    if (key === Key.ENTER) {
      onSearch(inputValue)
      setInputValue("")
    }
  }

  return (
    <input
      aria-label="Search product"
      className={styles["search-bar"]}
      placeholder="Search..."
      type="search"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value.toLowerCase())}
      onKeyDown={handleKeyDown}
    />
  )
}

export default SearchInput
