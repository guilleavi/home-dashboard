import { useState } from "react"
import styles from "./SaveButton.module.scss"

type SaveButtonProps = {
  newMonthsToFreeze: number
  storagedMonthsToFreeze: number
  onSave: () => void
}

const SaveButton = ({
  newMonthsToFreeze,
  storagedMonthsToFreeze,
  onSave,
}: SaveButtonProps) => {
  const [errorMessage, setErrorMessage] = useState("")

  const handleClick = () => {
    const validateData = () => {
      const hasMonthsToFreeze = newMonthsToFreeze || storagedMonthsToFreeze

      if (!hasMonthsToFreeze) {
        setErrorMessage("'Max. freeze time' is mandatory!")
        return false
      }

      setErrorMessage("")
      return true
    }

    if (validateData()) {
      onSave()
    }
  }

  return (
    <div className="center-container">
      <button
        className={styles["save-button"]}
        type="button"
        onClick={handleClick}
      >
        Save
      </button>
      <p className={styles["errors"]}>{errorMessage}</p>
    </div>
  )
}

export default SaveButton
