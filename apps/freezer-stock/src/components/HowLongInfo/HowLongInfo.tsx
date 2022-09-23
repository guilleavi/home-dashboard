import { ProductContext } from "contexts/ProductProvider"
import { useContext, useEffect, useState } from "react"
import { ProductActionType } from "types/state"
import styles from "./HowLongInfo.module.scss"

const HowLongInfo = () => {
  const {
    state: {
      storagedProduct: { howLongToFreeze: originalHowLongToFreeze },
    },
    dispatch,
  } = useContext(ProductContext)
  const [updatedHowLong, setUpdatedHowLong] = useState(0)

  useEffect(() => {
    setUpdatedHowLong(originalHowLongToFreeze)
  }, [originalHowLongToFreeze])

  const dispatchHowLong = (value: number) => {
    dispatch({
      type: ProductActionType.UPDATE_PRODUCT,
      payload: { key: "howLongToFreeze", value },
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
    setUpdatedHowLong(originalHowLongToFreeze)
    dispatchHowLong(originalHowLongToFreeze)
  }

  return (
    <div className={styles["container"]}>
      <p>Max. freeze time: </p>
      {updatedHowLong ? (
        <>
          <p className={styles["months"]}>{originalHowLongToFreeze} months </p>
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
          {originalHowLongToFreeze ? (
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
