import ActionButton from "@components/ActionButton/ActionButton"
import { ProductContext } from "@contexts/ProductProvider"
import { ProductActionType } from "@custom-types/state"
import { useContext, useState, useEffect } from "react"
import styles from "./HowLongInfo.module.scss"

const HowLongInfo = () => {
  const { state, dispatch } = useContext(ProductContext)
  const originalMonthsToFreeze = state.storagedProduct.monthsToFreeze

  const [editMode, setEditMode] = useState(false)
  const [newMonthsToFreeze, setNewMonthsToFreeze] = useState(0)

  useEffect(() => {
    setNewMonthsToFreeze(originalMonthsToFreeze)
  }, [originalMonthsToFreeze])

  const dispatchHowLong = (value: number) => {
    setNewMonthsToFreeze(value)
    dispatch({
      type: ProductActionType.UPDATE_PRODUCT,
      payload: { key: "monthsToFreeze", value },
    })
  }

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    const typedHowLong = Number(event.currentTarget.value)

    if (typedHowLong > 0) {
      dispatchHowLong(typedHowLong)
    }
  }

  const handleOnClickEdit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setEditMode(true)
  }

  const handleOnClickUndo = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setEditMode(false)

    if (originalMonthsToFreeze !== newMonthsToFreeze) {
      dispatchHowLong(originalMonthsToFreeze)
    }
  }

  return (
    <p className={styles["container"]}>
      Max. freeze time:
      {editMode ? (
        <>
          <span className={styles["months"]}>
            <input
              aria-label="How long the product can be freezed"
              className={styles["months-input"]}
              min="1"
              type="number"
              value={newMonthsToFreeze}
              onChange={handleOnChange}
            />{" "}
            months{" "}
          </span>
          <ActionButton actionName="undo" onAction={handleOnClickUndo} />
        </>
      ) : (
        <>
          <span className={styles["months"]}>
            {originalMonthsToFreeze} months{" "}
          </span>
          <ActionButton actionName="edit" onAction={handleOnClickEdit} />
        </>
      )}
    </p>
  )
}

export default HowLongInfo
