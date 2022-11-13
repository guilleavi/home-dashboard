import { ProductContext } from "@contexts/ProductProvider"
import { trimDateString } from "@utils/date"
import { pluralize, pluralizeToBe } from "@utils/strings"
import { useContext } from "react"

const ExpiringNextInfo = () => {
  const { state } = useContext(ProductContext)
  const { name, nextToExpireDate, nextToExpireUnits } = state.storagedProduct

  const formattedDate = trimDateString(nextToExpireDate.toString())

  return (
    <p>
      <span className="strong">
        {nextToExpireUnits} {pluralize("unit", nextToExpireUnits)}
      </span>{" "}
      of {name} {pluralizeToBe(nextToExpireUnits)} expiring on{" "}
      {/* TODO: calculate on days/months how long to expire */}
      <time dateTime={formattedDate} className="strong">
        {formattedDate}
      </time>
    </p>
  )
}

export default ExpiringNextInfo
