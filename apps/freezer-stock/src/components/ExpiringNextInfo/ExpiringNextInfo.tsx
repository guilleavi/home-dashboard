import SeeDetails from "@components/SeeDetails/SeeDetails"
import { ProductContext } from "@contexts/ProductProvider"
import { pluralize, pluralizeToBe } from "@utils/strings"
import { useContext } from "react"
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
        <strong>{nextToExpireDate.toDateString()}</strong>
      </p>
      <SeeDetails name={name} />
    </div>
  )
}

export default ExpiringNextInfo
