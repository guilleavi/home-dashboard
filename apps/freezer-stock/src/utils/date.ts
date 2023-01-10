import { pluralize } from "./strings"

/**
 * Removes timestamp
 * @param date {string}
 * @returns {string}
 */
export const trimDateString = (date: string): string => {
  const DATE_LENGTH = 10
  return date.slice(0, DATE_LENGTH)
}

/**
 * Return diff of time as a expression like '3 months 2 weeks 1 day'
 */
export const getDaysToExpire = ({
  today,
  expirationDate,
}: {
  today: Date
  expirationDate: Date
}) => {
  const ONE_THOUSAND = 1000
  const SECONDS_PER_HOUR = 3600
  const HOURS_PER_DAY = 24
  const DAYS_PER_WEEK = 7
  const DAYS_PER_MONTH = 30

  const getValue = (units: number, text: string) =>
    units ? `${units} ${pluralize(text, units)}` : ""
  const getDays = (days: number) => getValue(days, "day")
  const getWeeks = (weeks: number) => getValue(weeks, "week")
  const getMonths = (months: number) => getValue(months, "month")

  const diffOnDays = Math.floor(
    (expirationDate.getTime() - today.getTime()) /
      (ONE_THOUSAND * SECONDS_PER_HOUR * HOURS_PER_DAY),
  )

  if (diffOnDays < DAYS_PER_WEEK) {
    return getDays(diffOnDays)
  }

  if (diffOnDays < DAYS_PER_MONTH) {
    const diffOnWeeks = Math.floor(diffOnDays / DAYS_PER_WEEK)
    const restOfDays = Math.floor(diffOnDays % DAYS_PER_WEEK)
    return `${getWeeks(diffOnWeeks)} ${getDays(restOfDays)}`
  }

  const diffOnMonths = Math.floor(diffOnDays / DAYS_PER_MONTH)
  const restOfDays = diffOnDays - diffOnMonths * DAYS_PER_MONTH
  if (restOfDays < DAYS_PER_WEEK) {
    return `${getWeeks(diffOnMonths)} ${getDays(restOfDays)}`
  }

  const restOfWeeks = Math.floor(restOfDays / DAYS_PER_WEEK)
  const daysAfterWeeks = Math.floor(restOfDays % DAYS_PER_WEEK)
  return `${getMonths(diffOnMonths)} ${getWeeks(restOfWeeks)} ${getDays(
    daysAfterWeeks,
  )}`
}
