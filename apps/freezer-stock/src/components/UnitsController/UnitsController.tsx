import CounterButton from "@components/CounterButton/CounterButton"
import { ProductContext } from "@contexts/ProductProvider"
import { ProductActionType } from "@custom-types/state"
import { useContext } from "react"
import styles from "./UnitsController.module.scss"

const UnitsController = () => {
  const { state, dispatch } = useContext(ProductContext)
  const { units } = state.newProductItem || 0

  const handleUpdateQuantity = (add: number) => {
    let newQuantity = units + add
    newQuantity = newQuantity < 0 ? 0 : newQuantity
    dispatch({
      type: ProductActionType.UPDATE_PRODUCT,
      payload: { key: "units", value: newQuantity },
    })
  }

  return (
    <div className="center-container">
      <CounterButton operation="-" action={() => handleUpdateQuantity(-1)} />
      <p className={styles["label"]}>{units}</p>
      <CounterButton operation="+" action={() => handleUpdateQuantity(1)} />
    </div>
  )
}

export default UnitsController
