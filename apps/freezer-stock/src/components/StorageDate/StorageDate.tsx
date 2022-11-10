import { ProductContext } from "@contexts/ProductProvider"
import { ReactChangeEvent } from "@custom-types/dom"
import { ProductActionType } from "@custom-types/state"
import { trimDateString } from "@utils/date"
import { useContext, useEffect } from "react"
import styles from "./StorageDate.module.scss"

const StorageDate = () => {
  const { dispatch } = useContext(ProductContext)

  // TODO: fix date format, so the today date matches with the datepicker format
  const today = trimDateString(new Date().toISOString())

  useEffect(() => {
    /*
     * By default today's date is the storage date,
     * but you can force a custom one in the case you forget to update the freezer stock at the moment
     */
    dispatch({
      type: ProductActionType.UPDATE_PRODUCT,
      payload: {
        key: "storageDate",
        value: trimDateString(new Date(today).toISOString()),
      },
    })
  }, [dispatch, today])

  const handleDateOnChange = ({ target }: ReactChangeEvent) => {
    const fixedStorageDate = new Date(target.value)
    fixedStorageDate.setDate(fixedStorageDate.getDate() + 1) // Fix month

    dispatch({
      type: ProductActionType.UPDATE_PRODUCT,
      payload: {
        key: "storageDate",
        value: trimDateString(new Date(target.value).toISOString()),
      },
    })
  }

  return (
    <div className={styles["container"]}>
      <h3>Storage Date:</h3>
      <input
        className={styles["datepicker"]}
        defaultValue={today}
        type="date"
        onChange={handleDateOnChange}
      />
    </div>
  )
}

export default StorageDate
