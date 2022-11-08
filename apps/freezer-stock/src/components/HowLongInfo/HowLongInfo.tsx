import { ProductContext } from "@contexts/ProductProvider"
import { ProductActionType } from "@custom-types/state"
import { useContext, useState, useEffect } from "react"
import styles from "./HowLongInfo.module.scss"

const HowLongInfo = () => {
  const {
    state: {
      storagedProduct: { monthsToFreeze: originalMonthsToFreeze },
    },
    dispatch,
  } = useContext(ProductContext)
  const [updatedHowLong, setUpdatedHowLong] = useState(0)

  useEffect(() => {
    setUpdatedHowLong(originalMonthsToFreeze)
  }, [originalMonthsToFreeze])

  const dispatchHowLong = (value: number) => {
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
    setUpdatedHowLong(0)
  }

  const handleOnClickUndo = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setUpdatedHowLong(originalMonthsToFreeze)
    dispatchHowLong(originalMonthsToFreeze)
  }

  return (
    <div className={styles["container"]}>
      <p>Max. freeze time: </p>
      {updatedHowLong ? (
        <>
          <p className={styles["months"]}>{originalMonthsToFreeze} months </p>
          <button
            aria-label="edit"
            className={`${styles["button"]} ${styles["edit"]}`}
            type="button"
            onClick={handleOnClickEdit}
          />
        </>
      ) : (
        <>
          <p className={styles["months"]}>
            <input
              aria-label="How long the product can be freezed"
              className={styles["months-input"]}
              min="1"
              type="number"
              onChange={handleOnChange}
            />{" "}
            months{" "}
          </p>
          {originalMonthsToFreeze ? (
            <button
              aria-label="undo"
              className={`${styles["button"]} ${styles["undo"]}`}
              type="button"
              onClick={handleOnClickUndo}
            />
          ) : null}
        </>
      )}
    </div>
  )
}

export default HowLongInfo
