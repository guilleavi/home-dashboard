import styles from "./ActionButton.module.scss"

type ActionButtonProps = {
  actionName: string
  onAction: (event: React.MouseEvent<HTMLElement>) => void
}

const ActionButton = ({ actionName, onAction }: ActionButtonProps) => {
  return (
    <button
      aria-label={actionName}
      className={`${styles["button"]} ${styles[`${actionName}`]}`}
      type="button"
      onClick={onAction}
    />
  )
}

export default ActionButton
