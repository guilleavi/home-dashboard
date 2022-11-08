import { ProductContext } from "@contexts/ProductProvider"
import { ProductActionType } from "@custom-types/state"
import { saveProduct } from "@services/products"
import { useContext, useState } from "react"
import styles from "./SaveButton.module.scss"

const SaveButton = () => {
  const { state, dispatch } = useContext(ProductContext)
  const [errorMessage, setErrorMessage] = useState("")

  const validateData = () => {
    if (
      !state.newProductItem.monthsToFreeze &&
      !state.storagedProduct.monthsToFreeze
    ) {
      setErrorMessage("'How long to freeze value' is mandatory!")
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
    <>
      <button className="main-button" type="button" onClick={handleOnClick}>
        Save
      </button>
      <p className={styles["errors"]}>{errorMessage}</p>
    </>
  )
}

export default SaveButton
