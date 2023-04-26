import { EditAction } from "@enums/common"
import styles from "./ActionButton.module.css"

interface ActionButtonProps {
  action: EditAction
  onTriggerAction: () => void
}

const ActionButton = ({ action, onTriggerAction }: ActionButtonProps) => (
  <button
    className={`${styles["button"]} ${styles[`${action}`]}`}
    type="button"
    aria-label={action}
    onClick={onTriggerAction}
  />
)

export default ActionButton
