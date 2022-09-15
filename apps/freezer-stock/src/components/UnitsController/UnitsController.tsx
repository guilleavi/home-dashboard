import { ProductContext } from "contexts/ProductProvider"
import { useContext } from "react"
import { ProductActions } from "types/state"

const UnitsController = () => {
  const {
    state: {
      newProductItem: { units = 0 },
    },
    dispatch,
  } = useContext(ProductContext)

  const handleUpdateQuatity = (add: number) => {
    let newQuantity = units + add
    newQuantity = newQuantity < 0 ? 0 : newQuantity
    dispatch({
      type: ProductActions.UPDATE_UNITS_TO_STORAGE,
      payload: newQuantity,
    })
  }

  return (
    <div>
      <button type="button" onClick={() => handleUpdateQuatity(-1)}>
        -
      </button>
      <span>{units}</span>
      <button type="button" onClick={() => handleUpdateQuatity(1)}>
        +
      </button>
    </div>
  )
}

export default UnitsController
