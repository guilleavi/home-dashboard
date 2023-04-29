import { useAppSelector } from "@store/hooks"
import { getDaysToExpire } from "@utils/date"
import { pluralize, pluralizeToBe } from "@utils/strings"

const NextToExpire = () => {
  const { storagedProduct } = useAppSelector((state) => state.product)
  const { name, nextToExpireDate, nextToExpireUnits } = storagedProduct

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
