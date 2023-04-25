import { useContext, useState } from "react"
import styles from "./SaveButton.module.scss"
import { ProductContext } from "@contexts/ProductProvider"
import { saveProduct } from "@services/products"
import { ProductActionType } from "@state/actions"

interface SaveButtonProps {
  onShowSpinner: (show: boolean) => void
}

const SaveButton = ({ onShowSpinner }: SaveButtonProps) => {
  const { state, dispatch } = useContext(ProductContext)
  const storagedMonthsToFreeze = state.storagedProduct.monthsToFreeze
  const newMonthsToFreeze = state.newProductItem.monthsToFreeze

  const [errorMessage, setErrorMessage] = useState("")

  const handleSaveClick = async () => {
    const validateData = () => {
      const hasMonthsToFreeze = newMonthsToFreeze || storagedMonthsToFreeze

      if (!hasMonthsToFreeze) {
        setErrorMessage("'Max. freeze time' is mandatory!")
        return false
      }

      setErrorMessage("")
      return true
    }

    if (validateData()) {
      onShowSpinner(true)

      /* Add missing information to newProductItem */
      dispatch({
        type: ProductActionType.MERGE_PRODUCT,
      })

      await saveProduct(state.newProductItem)

      dispatch({
        type: ProductActionType.CLEAR_PRODUCT,
      })

      onShowSpinner(false)
    }
  }

  return (
    <div className="center-container">
      <button
        className={styles["save-button"]}
        type="button"
        onClick={handleSaveClick}
      >
        Save
      </button>
      <p className={styles["errors"]}>{errorMessage}</p>
    </div>
  )
}

export default SaveButton
