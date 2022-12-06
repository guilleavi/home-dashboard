import { EditAction } from "@enums/common"
import styles from "./ActionButton.module.scss"

type ActionButtonProps = {
  action: EditAction
  onTriggerAction: () => void
}

const ActionButton = ({ action, onTriggerAction }: ActionButtonProps) => {
  return (
    <button
      aria-label={action}
      className={`${styles["button"]} ${styles[`${action}`]}`}
      type="button"
      onClick={onTriggerAction}
    />
  )
}

export default ActionButton
