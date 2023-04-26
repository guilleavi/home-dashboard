import ActionButton from "@components/ActionButton/ActionButton"
import { ProductContext } from "@contexts/ProductProvider"
import type { ReactChangeEvent } from "@custom-types/dom"
import { EditAction } from "@enums/common"
import { ProductActionType } from "@state/actions"
import { useContext, useState } from "react"
import styles from "./MonthsToFreeze.module.css"

const getOppositeAction = (currentAction: EditAction) =>
  currentAction === EditAction.EDIT ? EditAction.UNDO : EditAction.EDIT

const MonthsToFreeze = () => {
  const { state, dispatch } = useContext(ProductContext)
  const monthsToFreezeOriginalValue = state.storagedProduct.monthsToFreeze

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
      dispatch({
        type: ProductActionType.UPDATE_PRODUCT,
        payload: { key: "monthsToFreeze", value: typedNumber },
      })
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
      dispatch({
        type: ProductActionType.UPDATE_PRODUCT,
        payload: { key: "monthsToFreeze", value: monthsToFreezeOriginalValue },
      })
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
