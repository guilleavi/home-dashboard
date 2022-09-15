import { ProductContext } from "contexts/ProductProvider"
import React, { useContext, useEffect, useState } from "react"
import { ProductActions } from "types/state"

const StorageDate = () => {
  const DATE_LENGTH = 10
  const today = new Date().toISOString().slice(0, DATE_LENGTH)

  const { dispatch } = useContext(ProductContext)
  const [hasCustomDate, setHasCustomDate] = useState(false)

  useEffect(() => {
    if (!hasCustomDate) {
      /*
       * By default today's date is the storage date,
       * but you can force a custom one in the case you forget to update the freezer stock at the moment
       */
      dispatch({
        type: ProductActions.UPDATE_STORAGE_DATE,
        payload: today,
      })
    }
  }, [dispatch, hasCustomDate, today])

  const handleCheckboxOnClick = () => {
    setHasCustomDate(!hasCustomDate)
  }

  const handleDateOnChange = (
    event: React.ChangeEvent<HTMLInputElement> & { target: HTMLInputElement },
  ) => {
    dispatch({
      type: ProductActions.UPDATE_STORAGE_DATE,
      payload: event.target.value,
    })
  }

  return (
    <>
      <div>{`Storage Date ${!hasCustomDate ? today : ""}`}</div>
      <div>
        <input
          type="checkbox"
          checked={hasCustomDate}
          onChange={handleCheckboxOnClick}
        />
        {`Custom date`}
        {hasCustomDate ? (
          <input
            type="date"
            disabled={!hasCustomDate}
            defaultValue={today}
            onChange={handleDateOnChange}
          />
        ) : null}
      </div>
    </>
  )
}

export default StorageDate
