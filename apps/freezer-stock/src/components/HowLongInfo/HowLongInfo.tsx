import { ProductContext } from "contexts/ProductProvider"
import { useContext, useEffect, useState } from "react"
import { ProductActionType } from "types/state"

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

  const handleKeyDown = (e: React.FormEvent<HTMLInputElement>) => {
    dispatchHowLong(Number(e.currentTarget.value))
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
    <div>
      <h3>How long can you freeze it? </h3>
      {updatedHowLong ? (
        <p>
          {originalHowLongToFreeze} months{" "}
          <button type="button" onClick={handleOnClickEdit}>
            {/* TODO: replace with icon */}
            Edit
          </button>
        </p>
      ) : (
        <>
          <input
            type="text"
            placeholder="How long...?"
            aria-label="How long the product can be freezed"
            onKeyDown={handleKeyDown}
          />{" "}
          <span>months</span>{" "}
          {originalHowLongToFreeze ? (
            <button type="button" onClick={handleOnClickUndo}>
              {/* TODO: replace with icon */}
              Undo
            </button>
          ) : null}
        </>
      )}
    </div>
  )
}

export default HowLongInfo
