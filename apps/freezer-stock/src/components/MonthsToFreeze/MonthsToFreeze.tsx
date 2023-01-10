import ActionButton from "@components/ActionButton/ActionButton"
import type { ReactChangeEvent } from "@custom-types/dom"
import { EditAction } from "@enums/common"
import { useState } from "react"
import styles from "./MonthsToFreeze.module.scss"

type MonthsToFreezeProps = {
  originalMonthsToFreeze: number
  onChangeMonthsToFreeze: (updatedMonthsToFreeze: number) => void
}

const getOppositeAction = (currentAction: EditAction) =>
  currentAction === EditAction.EDIT ? EditAction.UNDO : EditAction.EDIT

const MonthsToFreeze = ({
  originalMonthsToFreeze,
  onChangeMonthsToFreeze,
}: MonthsToFreezeProps) => {
  const [editMode, setEditMode] = useState(EditAction.UNDO)
  const [inputValue, setInputValue] = useState(originalMonthsToFreeze)

  const handleChange = ({ target }: ReactChangeEvent) => {
    const typedMonthsToFreeze = Number(target.value)

    if (typedMonthsToFreeze > 0) {
      setInputValue(typedMonthsToFreeze)
      onChangeMonthsToFreeze(typedMonthsToFreeze)
    }
  }

  const handleTriggerAction = () => {
    const newAction = getOppositeAction(editMode)
    setEditMode(newAction)

    if (
      newAction === EditAction.UNDO &&
      originalMonthsToFreeze !== inputValue
    ) {
      setInputValue(originalMonthsToFreeze)
      onChangeMonthsToFreeze(originalMonthsToFreeze)
    }
  }

  return (
    <p className={styles["container"]}>
      Max. freeze time:{" "}
      <span className={styles["months"]}>
        {editMode === EditAction.EDIT ? (
          <input
            aria-label="How long the product can be freezed"
            className={styles["months-input"]}
            min="1"
            type="number"
            value={inputValue}
            onChange={handleChange}
          />
        ) : (
          <> {originalMonthsToFreeze}</>
        )}{" "}
        months{" "}
      </span>
      <ActionButton
        action={getOppositeAction(editMode)}
        onTriggerAction={handleTriggerAction}
      />
    </p>
  )
}

export default MonthsToFreeze
