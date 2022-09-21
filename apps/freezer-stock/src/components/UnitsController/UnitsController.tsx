import { ProductContext } from "contexts/ProductProvider"
import { useContext } from "react"
import { ProductActionType } from "types/state"

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
      type: ProductActionType.UPDATE_PRODUCT,
      payload: { key: "units", value: newQuantity },
    })
  }

  return (
    <>
      <button type="button" onClick={() => handleUpdateQuatity(-1)}>
        -
      </button>
      <span>{units}</span>
      <button type="button" onClick={() => handleUpdateQuatity(1)}>
        +
      </button>
    </>
  )
}

export default UnitsController
