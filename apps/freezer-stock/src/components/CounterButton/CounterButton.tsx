import styles from "./CounterButton.module.scss"

type CounterButtonProps = {
  operation: string
  onTriggerAction: () => void
}

const CounterButton = ({ operation, onTriggerAction }: CounterButtonProps) => (
  <button
    className={styles["counter-button"]}
    type="button"
    onClick={onTriggerAction}
  >
    {operation}
  </button>
)

export default CounterButton
