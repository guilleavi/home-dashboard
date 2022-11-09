import { ProductContext } from "@contexts/ProductProvider"
import { ProductActionType } from "@custom-types/state"
import { saveProduct } from "@services/products"
import { useContext, useState } from "react"
import styles from "./SaveButton.module.scss"

const SaveButton = () => {
  const { state, dispatch } = useContext(ProductContext)
  const [errorMessage, setErrorMessage] = useState("")

  const validateData = () => {
    const hasMonthsToFreeze =
      state.newProductItem.monthsToFreeze ||
      state.storagedProduct.monthsToFreeze

    if (!hasMonthsToFreeze) {
      setErrorMessage("'Max. freeze time' is mandatory!")
      return false
    }

    setErrorMessage("")
    return true
  }

  const handleOnClick = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()

    if (validateData()) {
      // add missing information to newProductItem
      dispatch({
        type: ProductActionType.MERGE_PRODUCT,
      })

      await saveProduct(state.newProductItem)

      dispatch({
        type: ProductActionType.CLEAR_PRODUCT,
      })
    }
  }

  return (
    <div className="center-container">
      <button className="main-button" type="button" onClick={handleOnClick}>
        Save
      </button>
      <p className={styles["errors"]}>{errorMessage}</p>
    </div>
  )
}

export default SaveButton
