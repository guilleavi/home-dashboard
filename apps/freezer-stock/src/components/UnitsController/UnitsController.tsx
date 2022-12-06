import CounterButton from "@components/CounterButton/CounterButton"
import styles from "./UnitsController.module.scss"

type UnitsControllerProps = {
  units: number
  onChangeUnits: (newUnits: number) => void
}

const UnitsController = ({
  units = 0,
  onChangeUnits,
}: UnitsControllerProps) => {
  const handleUpdateQuantity = (add: number) => {
    let newQuantity = units + add
    newQuantity = newQuantity < 0 ? 0 : newQuantity
    onChangeUnits(newQuantity)
  }

  return (
    <div className="center-container">
      <CounterButton
        operation="-"
        onTriggerAction={() => handleUpdateQuantity(-1)}
      />
      <label className={styles["label"]}>{units}</label>
      <CounterButton
        operation="+"
        onTriggerAction={() => handleUpdateQuantity(1)}
      />
    </div>
  )
}

export default UnitsController
