import { ProductContext } from "contexts/ProductProvider"
import { useContext } from "react"
import { saveProduct } from "services/products"
import { ProductActionType } from "types/state"

const SaveButton = () => {
  const { state, dispatch } = useContext(ProductContext)

  const handleOnClick = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    if (!state.newProductItem.howLongToFreeze) {
      dispatch({
        type: ProductActionType.UPDATE_PRODUCT,
        payload: {
          key: "howLongToFreeze",
          value: state.storagedProduct.howLongToFreeze,
        },
      })
    }
    await saveProduct(state.newProductItem)
  }

  return (
    <div>
      <button type="button" onClick={handleOnClick}>
        Save
      </button>
      <pre>{JSON.stringify(state.newProductItem)}</pre>
    </div>
  )
}

export default SaveButton
