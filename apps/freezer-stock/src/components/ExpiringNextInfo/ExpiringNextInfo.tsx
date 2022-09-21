import { ProductContext } from "contexts/ProductProvider"
import { useContext } from "react"
import { pluralize, pluralizeToBe } from "utils/strings"

const ExpiringNextInfo = () => {
  const {
    state: {
      storagedProduct: { name, nextToExpireDate, nextToExpireUnits },
    },
  } = useContext(ProductContext)

  return (
    <div>
      {nextToExpireUnits} {pluralize("unit", nextToExpireUnits)} of {name}{" "}
      {pluralizeToBe(nextToExpireUnits)} expiring on{" "}
      {/* TODO: calculate on days/months how long to expire */}
      {nextToExpireDate}
    </div>
  )
}

export default ExpiringNextInfo
