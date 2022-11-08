import { ProductContext } from "@contexts/ProductProvider"
import { ProductActionType } from "@custom-types/state"
import { useContext, useState, useEffect } from "react"
import styles from "./StorageDate.module.scss"

const StorageDate = () => {
  const today = new Date().toISOString().slice(0, 10)

  const { dispatch } = useContext(ProductContext)
  const [hasCustomDate, setHasCustomDate] = useState(false)

  useEffect(() => {
    if (!hasCustomDate) {
      /*
       * By default today's date is the storage date,
       * but you can force a custom one in the case you forget to update the freezer stock at the moment
       */
      dispatch({
        type: ProductActionType.UPDATE_PRODUCT,
        payload: { key: "storageDate", value: today },
      })
    }
  }, [dispatch, hasCustomDate, today])

  const handleCheckboxOnClick = () => {
    setHasCustomDate(!hasCustomDate)
  }

  const handleDateOnChange = (
    event: React.ChangeEvent<HTMLInputElement> & { target: HTMLInputElement },
  ) => {
    const fixedStorageDate = new Date(event.target.value)
    fixedStorageDate.setDate(fixedStorageDate.getDate() + 1) // Fix month

    dispatch({
      type: ProductActionType.UPDATE_PRODUCT,
      payload: { key: "storageDate", value: fixedStorageDate },
    })
  }

  return (
    <section>
      {/* TODO: standarize date format */}
      <p>
        Storage Date: <strong>{!hasCustomDate ? today : ""}</strong>
      </p>
      <div className={styles["custom"]}>
        <input
          type="checkbox"
          checked={hasCustomDate}
          onChange={handleCheckboxOnClick}
        />
        {`Custom date `}
        {hasCustomDate ? (
          <input
            className={styles["datepicker"]}
            type="date"
            disabled={!hasCustomDate}
            defaultValue={today}
            onChange={handleDateOnChange}
          />
        ) : null}
      </div>
    </section>
  )
}

export default StorageDate
