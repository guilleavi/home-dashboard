import { ProductContext } from "@contexts/ProductProvider"
import { trimDateString } from "@utils/date"
import { pluralize, pluralizeToBe } from "@utils/strings"
import { useContext } from "react"
import styles from "./ExpiringNextInfo.module.scss"

const ExpiringNextInfo = () => {
  const { state } = useContext(ProductContext)
  const { name, nextToExpireDate, nextToExpireUnits } = state.storagedProduct

  return (
    <div className={styles["container"]}>
      <p>
        <strong>
          {nextToExpireUnits} {pluralize("unit", nextToExpireUnits)}
        </strong>{" "}
        of {name} {pluralizeToBe(nextToExpireUnits)} expiring on{" "}
        {/* TODO: calculate on days/months how long to expire */}
        <strong>{trimDateString(nextToExpireDate.toString())}</strong>
      </p>
    </div>
  )
}

export default ExpiringNextInfo
