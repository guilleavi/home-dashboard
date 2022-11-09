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
    console.log("originalMonthsToFreeze", originalMonthsToFreeze)
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
    <div className={styles["container"]}>
      <p>Max. freeze time: </p>
      {editMode ? (
        <>
          <p className={styles["months"]}>
            <input
              aria-label="How long the product can be freezed"
              className={styles["months-input"]}
              min="1"
              type="number"
              value={newMonthsToFreeze}
              onChange={handleOnChange}
            />{" "}
            months{" "}
          </p>
          <ActionButton actionName="undo" onAction={handleOnClickUndo} />
        </>
      ) : (
        <>
          <p className={styles["months"]}>{originalMonthsToFreeze} months </p>
          <ActionButton actionName="edit" onAction={handleOnClickEdit} />
        </>
      )}
    </div>
  )
}

export default HowLongInfo
