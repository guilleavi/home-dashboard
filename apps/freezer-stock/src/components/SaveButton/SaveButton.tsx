import { ProductContext } from "contexts/ProductProvider"
import { useContext, useState } from "react"
import { saveProduct } from "services/products"
import { ProductActionType } from "types/state"

const SaveButton = () => {
  const { state, dispatch } = useContext(ProductContext)
  const [errorMessage, setErrorMessage] = useState("")

  const validateData = () => {
    if (
      !state.newProductItem.howLongToFreeze &&
      !state.storagedProduct.howLongToFreeze
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
      <button type="button" onClick={handleOnClick}>
        Save
      </button>
      <p>{errorMessage}</p>
      {/* TODO: remove next line */}
      <pre>{JSON.stringify(state.newProductItem)}</pre>
    </>
  )
}

export default SaveButton
