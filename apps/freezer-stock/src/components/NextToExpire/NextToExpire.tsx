import { ProductContext } from "@contexts/ProductProvider"
import { getDaysToExpire } from "@utils/date"
import { pluralize, pluralizeToBe } from "@utils/strings"
import { useContext } from "react"

const NextToExpire = () => {
  const { state } = useContext(ProductContext)
  const { name, nextToExpireDate, nextToExpireUnits } = state.storagedProduct

  return (
    <p className="paragraph-container">
      <span className="bold-text">
        {nextToExpireUnits} {pluralize("unit", nextToExpireUnits)}
      </span>{" "}
      of {name} {pluralizeToBe(nextToExpireUnits)} expiring in{" "}
      <span className="bold-text">
        {getDaysToExpire({
          today: new Date(),
          expirationDate: new Date(nextToExpireDate),
        })}
      </span>
    </p>
  )
}

export default NextToExpire
