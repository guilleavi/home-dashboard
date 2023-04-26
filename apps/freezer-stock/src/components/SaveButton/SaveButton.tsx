import { ProductContext } from "@contexts/ProductProvider"
import { saveProduct } from "@services/products"
import { ProductActionType } from "@state/actions"
import { useContext } from "react"
import styles from "./SaveButton.module.scss"

interface SaveButtonProps {
  onShowSpinner: (show: boolean) => void
}

const SaveButton = ({ onShowSpinner }: SaveButtonProps) => {
  const { state, dispatch } = useContext(ProductContext)
  const storagedMonthsToFreeze = state.storagedProduct.monthsToFreeze
  const newMonthsToFreeze = state.newProductItem.monthsToFreeze

  const handleSaveClick = async () => {
    const validateData = () => {
      const errorMessages = []
      const hasMonthsToFreeze = newMonthsToFreeze || storagedMonthsToFreeze

      if (!hasMonthsToFreeze) {
        errorMessages.push("'Max. freeze time' is mandatory!")
        dispatch({ type: ProductActionType.SET_ERRORS, payload: errorMessages })
        return false
      }

      // TODO: remove this, it's just to test error's styles
      errorMessages.push("'Max. freeze time' is mandatory!")
      errorMessages.push("'Max. freeze time' is mandatory!")
      dispatch({ type: ProductActionType.SET_ERRORS, payload: errorMessages })
      return false

      return true
    }

    if (validateData()) {
      onShowSpinner(true)

      /* If the product to save is missing information, take it from the storage product */
      dispatch({
        type: ProductActionType.MERGE_PRODUCT,
      })

      await saveProduct(state.newProductItem)

      /* Clean up data to start new search */
      dispatch({
        type: ProductActionType.CLEAR_PRODUCT,
      })

      onShowSpinner(false)
    }
  }

  return (
    <button
      className={`block-container ${styles["save-button"]}`}
      type="button"
      onClick={handleSaveClick}
    >
      SAVE
    </button>
  )
}

export default SaveButton
