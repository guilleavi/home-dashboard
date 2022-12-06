import { EditAction } from "@custom-types/enums"
import styles from "./ActionButton.module.scss"

type ActionButtonProps = {
  action: EditAction
  onTriggerAction: () => void
}

const ActionButton = ({ action, onTriggerAction }: ActionButtonProps) => {
  return (
    <button
      aria-label={action}
      className={`${styles["button"]} ${styles[`${action.toLowerCase()}`]}`}
      type="button"
      onClick={onTriggerAction}
    />
  )
}

export default ActionButton
