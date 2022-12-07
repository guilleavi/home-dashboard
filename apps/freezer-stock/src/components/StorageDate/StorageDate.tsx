import type { ReactChangeEvent } from "@custom-types/dom"
import { trimDateString } from "@utils/date"
import { useState } from "react"
import styles from "./StorageDate.module.scss"

type StorageDateProps = {
  onChangeStorageDate: (newDate: string) => void
}

const StorageDate = ({ onChangeStorageDate }: StorageDateProps) => {
  const [storageDate, setStorageDate] = useState(
    trimDateString(new Date().toISOString()),
  )

  const handleChange = ({ target }: ReactChangeEvent) => {
    onChangeStorageDate(target.value)
    setStorageDate(target.value)
  }

  return (
    <div className={styles["container"]}>
      <h3>Storage Date:</h3>
      <input
        className={styles["datepicker"]}
        type="date"
        value={storageDate}
        onChange={handleChange}
      />
    </div>
  )
}

export default StorageDate
