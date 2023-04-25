import CounterButton from "@components/CounterButton/CounterButton"
import { ProductContext } from "@contexts/ProductProvider"
import { ProductActionType } from "@state/actions"
import { useContext } from "react"
import styles from "./UnitsController.module.scss"

const UnitsController = () => {
  const { state, dispatch } = useContext(ProductContext)
  const { units = 0 } = state.newProductItem

  const handleUpdateQuantity = (add: number) => {
    const newQuantity = units + add
    const normalizedNewQuantity = newQuantity < 0 ? 0 : newQuantity
    dispatch({
      type: ProductActionType.UPDATE_PRODUCT,
      payload: { key: "units", value: normalizedNewQuantity },
    })
  }

  return (
    <div className="center-container">
      <CounterButton
        operation="-"
        onTriggerAction={() => handleUpdateQuantity(-1)}
      />
      <p className={styles["label"]}>{units}</p>
      <CounterButton
        operation="+"
        onTriggerAction={() => handleUpdateQuantity(1)}
      />
    </div>
  )
}

export default UnitsController
