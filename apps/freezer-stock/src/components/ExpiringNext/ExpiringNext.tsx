import { trimDateString } from "@utils/date"
import { pluralize, pluralizeToBe } from "@utils/strings"

type ExpiringNextProps = {
  name: string
  nextToExpireDate: Date
  nextToExpireUnits: number
}

const ExpiringNext = ({
  name,
  nextToExpireDate,
  nextToExpireUnits,
}: ExpiringNextProps) => {
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

export default ExpiringNext
