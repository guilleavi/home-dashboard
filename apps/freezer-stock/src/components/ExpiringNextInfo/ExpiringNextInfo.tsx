import SeeDetails from "components/SeeDetails/SeeDetails"
import { ProductContext } from "contexts/ProductProvider"
import Link from "next/link"
import { useContext } from "react"
import { pluralize, pluralizeToBe } from "utils/strings"
import styles from "./ExpiringNextInfo.module.scss"

const ExpiringNextInfo = () => {
  const {
    state: {
      storagedProduct: { name, nextToExpireDate, nextToExpireUnits },
    },
  } = useContext(ProductContext)

  return (
    <div className={styles["container"]}>
      <p>
        <strong>
          {nextToExpireUnits} {pluralize("unit", nextToExpireUnits)}
        </strong>{" "}
        of {name} {pluralizeToBe(nextToExpireUnits)} expiring on{" "}
        {/* TODO: calculate on days/months how long to expire */}
        <strong>{nextToExpireDate}</strong>
      </p>
      <SeeDetails name={name} />
    </div>
  )
}

export default ExpiringNextInfo
