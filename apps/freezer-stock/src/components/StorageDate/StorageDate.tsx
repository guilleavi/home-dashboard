import { ProductContext } from "@contexts/ProductProvider"
import type { ReactChangeEvent } from "@custom-types/dom"
import { ProductActionType } from "@state/actions"
import { trimDateString } from "@utils/date"
import { useContext, useState } from "react"
import styles from "./StorageDate.module.css"

/* If there is no 'date' arg, it will returns today's date */
const normalizedDate = (date?: string) =>
  trimDateString((date ? new Date(date) : new Date()).toISOString())

const StorageDate = () => {
  const { dispatch } = useContext(ProductContext)

  const [storageDate, setStorageDate] = useState(normalizedDate())

  const handleDatepickerChange = ({ target }: ReactChangeEvent) => {
    setStorageDate(target.value)
    dispatch({
      type: ProductActionType.UPDATE_PRODUCT,
      payload: {
        key: "storageDate",
        value: trimDateString(normalizedDate(target.value)),
      },
    })
  }

  return (
    <div className={`block-container ${styles["storage-date-container"]}`}>
      <label htmlFor="storage-date-datepicker">
        Storage Date:
      </label>
      <input
        className={styles["datepicker"]}
        id="storage-date-datepicker"
        type="date"
        value={storageDate}
        onChange={handleDatepickerChange}
      />
    </div>
  )
}

export default StorageDate
