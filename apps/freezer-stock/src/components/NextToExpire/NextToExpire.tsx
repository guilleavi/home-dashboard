import { pluralize, pluralizeToBe } from "@utils/strings"
import styles from "./NextToExpire.module.scss"

type NextToExpireProps = {
  name: string
  nextToExpireDate: string
  nextToExpireUnits: number
}

const NextToExpire = ({
  name,
  nextToExpireDate,
  nextToExpireUnits,
}: NextToExpireProps) => {
  return (
    <p>
      <span className={styles["strong"]}>
        {nextToExpireUnits} {pluralize("unit", nextToExpireUnits)}
      </span>{" "}
      of {name} {pluralizeToBe(nextToExpireUnits)} expiring on{" "}
      {/* TODO: calculate on days/months how long to expire */}
      <time className={styles["strong"]} dateTime={nextToExpireDate}>
        {nextToExpireDate}
      </time>
    </p>
  )
}

export default NextToExpire
