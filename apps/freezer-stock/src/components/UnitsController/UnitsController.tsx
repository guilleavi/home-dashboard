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
    const newQuantity = units + add
    onChangeUnits(newQuantity < 0 ? 0 : newQuantity)
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
