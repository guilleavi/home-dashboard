import { ProductContext } from "@contexts/ProductProvider"
import { getDaysToExpire } from "@utils/date"
import { pluralize, pluralizeToBe } from "@utils/strings"
import { useCallback, useContext } from "react"

const NextToExpire = () => {
  const { state } = useContext(ProductContext)
  const { name, nextToExpireDate, nextToExpireUnits } = state.storagedProduct

  const daysToExpire = useCallback(
    (expirationDate: Date) =>
      getDaysToExpire({
        today: new Date(),
        expirationDate: new Date(expirationDate),
      }),
    [],
  )

  return (
    <p className="paragraph-container">
      <span className="bold-text">
        {nextToExpireUnits} {pluralize("unit", nextToExpireUnits)}
      </span>{" "}
      of {name} {pluralizeToBe(nextToExpireUnits)} expiring in{" "}
      <time className="bold-text" dateTime={daysToExpire(nextToExpireDate)}>
        {daysToExpire(nextToExpireDate)}
      </time>
    </p>
  )
}

export default NextToExpire
