import { saveProduct } from "@services/products"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { cleanUp, errors, merge } from "@store/productSlice"
import styles from "./SaveButton.module.css"

interface SaveButtonProps {
  onShowSpinner: (show: boolean) => void
}

const SaveButton = ({ onShowSpinner }: SaveButtonProps) => {
  const dispatch = useAppDispatch()
  const { storagedProduct, newProductItem } = useAppSelector(
    (state) => state.product,
  )
  const storagedMonthsToFreeze = storagedProduct.monthsToFreeze
  const newMonthsToFreeze = newProductItem.monthsToFreeze

  const handleSaveClick = async () => {
    const validateData = () => {
      const errorMessages = []
      const hasMonthsToFreeze = newMonthsToFreeze || storagedMonthsToFreeze

      if (!hasMonthsToFreeze) {
        errorMessages.push("'Max. freeze time' is mandatory!")
        dispatch(errors(errorMessages))
        return false
      }

      return true
    }

    if (validateData()) {
      onShowSpinner(true)

      /* If the product to save is missing information, take it from the storage product */
      dispatch(merge())

      await saveProduct(newProductItem)

      /* Clean up data to start new search */
      dispatch(cleanUp())

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
