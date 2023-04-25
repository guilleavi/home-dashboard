import { ProductContext } from "@contexts/ProductProvider"
import { getDaysToExpire } from "@utils/date"
import { pluralize, pluralizeToBe } from "@utils/strings"
import { useCallback, useContext } from "react"
import styles from "./NextToExpire.module.scss"

const NextToExpire = () => {
  const { state } = useContext(ProductContext)
  const { name, nextToExpireDate, nextToExpireUnits } = state.storagedProduct

  const daysToExpire = useCallback(
    (nextToExpireDate: Date) =>
      getDaysToExpire({
        today: new Date(),
        expirationDate: new Date(nextToExpireDate),
      }),
    [nextToExpireDate],
  )

  return (
    <p>
      <span className={styles["strong"]}>
        {nextToExpireUnits} {pluralize("unit", nextToExpireUnits)}
      </span>{" "}
      of {name} {pluralizeToBe(nextToExpireUnits)} expiring on{" "}
      <time
        className={styles["strong"]}
        dateTime={daysToExpire(nextToExpireDate)}
      >
        {daysToExpire(nextToExpireDate)}
      </time>
    </p>
  )
}

export default NextToExpire
