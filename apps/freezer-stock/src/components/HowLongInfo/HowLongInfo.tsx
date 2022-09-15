import { ProductContext } from "contexts/ProductProvider"
import { useContext, useEffect, useState } from "react"
import { ProductActions } from "types/state"

const HowLongInfo = ({ howLongToFreeze }: { howLongToFreeze: number }) => {
  const { dispatch } = useContext(ProductContext)
  const [localHowLong, setLocalHowLong] = useState<number>(0)

  useEffect(() => {
    setLocalHowLong(howLongToFreeze)
  }, [howLongToFreeze])

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch({
      type: ProductActions.UPDATE_HOW_MANY_MONTHS_FREEZE,
      payload: Number(e.currentTarget.value),
    })
  }

  const handleOnClickEdit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setLocalHowLong(0)
  }

  const handleOnClickUndo = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setLocalHowLong(howLongToFreeze)
  }

  return (
    <div>
      <h2>How long can you freeze it? </h2>
      {localHowLong ? (
        <p>
          {howLongToFreeze} months{" "}
          <button type="button" onClick={handleOnClickEdit}>
            Edit
          </button>
        </p>
      ) : (
        <>
          {" "}
          <input
            type="number"
            placeholder="How long...?"
            aria-label="How long the product can be freezed"
            onChange={handleOnChange}
          />{" "}
          <span>months</span>
          {howLongToFreeze ? (
            <button type="button" onClick={handleOnClickUndo}>
              Undo
            </button>
          ) : null}
        </>
      )}
    </div>
  )
}

export default HowLongInfo
