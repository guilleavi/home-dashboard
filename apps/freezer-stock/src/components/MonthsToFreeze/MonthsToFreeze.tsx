import ActionButton from "@components/ActionButton/ActionButton"
import type { ReactChangeEvent } from "@custom-types/dom"
import { EditAction } from "@enums/common"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { update } from "@store/productSlice"
import { useState } from "react"
import styles from "./MonthsToFreeze.module.css"

const getOppositeAction = (currentAction: EditAction) =>
  currentAction === EditAction.EDIT ? EditAction.UNDO : EditAction.EDIT

const MonthsToFreeze = () => {
  const dispatch = useAppDispatch()
  const { storagedProduct } = useAppSelector((state) => state.product)
  const monthsToFreezeOriginalValue = storagedProduct.monthsToFreeze

  const [monthsToFreezeInputValue, setMonthsToFreezeInputValue] = useState(
    monthsToFreezeOriginalValue,
  )
  /* The inital state 'UNDO' represents the read only functionality */
  const [editMode, setEditMode] = useState(EditAction.UNDO)

  const handleChangeInput = ({ target }: ReactChangeEvent) => {
    const typedNumber = Number(target.value)

    /* Only positive values are valid */
    if (typedNumber > 0) {
      setMonthsToFreezeInputValue(typedNumber)
      dispatch(update({ key: "monthsToFreeze", value: typedNumber }))
    }
  }

  /* Toggle between EDIT and UNDO actions */
  const handleTriggerAction = () => {
    const newAction = getOppositeAction(editMode)
    setEditMode(newAction)

    const hasMonthsToFreezeBeenUpdated =
      newAction === EditAction.UNDO &&
      monthsToFreezeOriginalValue !== monthsToFreezeInputValue
    /* Only undo the monthsToFreeze value, if it's been changed by the user */
    if (hasMonthsToFreezeBeenUpdated) {
      setMonthsToFreezeInputValue(monthsToFreezeOriginalValue)
      dispatch(
        update({ key: "monthsToFreeze", value: monthsToFreezeOriginalValue }),
      )
    }
  }

  return (
    <div className={styles["container"]}>
      <p className="paragraph-container">
        Max. freeze time:{" "}
        <span className="bold-text">
          {editMode === EditAction.EDIT ? (
            <input
              className={styles["months-input"]}
              min="1"
              type="number"
              value={monthsToFreezeInputValue}
              aria-label="How long the product can be freezed"
              onChange={handleChangeInput}
            />
          ) : (
            <> {monthsToFreezeOriginalValue}</>
          )}{" "}
          months{" "}
        </span>
      </p>
      <ActionButton
        action={getOppositeAction(editMode)}
        onTriggerAction={handleTriggerAction}
      />
    </div>
  )
}

export default MonthsToFreeze
