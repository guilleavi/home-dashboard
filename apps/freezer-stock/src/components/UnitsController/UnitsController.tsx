import CounterButton from "@components/CounterButton/CounterButton"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { update } from "@store/productSlice"
import styles from "./UnitsController.module.css"

const UnitsController = () => {
  const dispatch = useAppDispatch()
  const { newProductItem } = useAppSelector((state) => state.product)

  const { units = 0 } = newProductItem

  const handleUpdateQuantity = (add: number) => {
    const newQuantity = units + add
    const normalizedNewQuantity = newQuantity < 0 ? 0 : newQuantity
    dispatch(update({ key: "units", value: normalizedNewQuantity }))
  }

  return (
    <div className={`block-container ${styles["centered"]}`}>
      <CounterButton
        operation="-"
        onTriggerAction={() => handleUpdateQuantity(-1)}
      />
      {units}
      <CounterButton
        operation="+"
        onTriggerAction={() => handleUpdateQuantity(1)}
      />
    </div>
  )
}

export default UnitsController
