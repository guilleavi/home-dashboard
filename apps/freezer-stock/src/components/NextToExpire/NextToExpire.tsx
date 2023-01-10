import { getDaysToExpire } from "@utils/date"
import { pluralize, pluralizeToBe } from "@utils/strings"
import styles from "./NextToExpire.module.scss"

type NextToExpireProps = {
  name: string
  nextToExpireDate: Date
  nextToExpireUnits: number
}

const daysToExpire = (nextToExpireDate: Date) =>
  getDaysToExpire({
    today: new Date(),
    expirationDate: new Date(nextToExpireDate),
  })

const NextToExpire = ({
  name,
  nextToExpireDate,
  nextToExpireUnits,
}: NextToExpireProps) => (
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

export default NextToExpire
