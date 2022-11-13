import styles from "./CounterButton.module.scss"

type CounterButtonProps = {
  operation: string
  action: () => void
}

const CounterButton = ({ operation, action }: CounterButtonProps) => (
  <button className={styles["button"]} type="button" onClick={action}>
    {operation}
  </button>
)

export default CounterButton
