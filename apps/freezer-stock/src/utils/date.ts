import { pluralize } from "./strings"

/**
 * Removes timestamp
 * @param date {string}
 * @returns {string}
 */
export const trimDateString = (date: string): string => date.slice(0, 10)

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
  const getValue = (units: number, text: string) =>
    units ? `${units} ${pluralize(text, units)}` : ""
  const getDays = (days: number) => getValue(days, "day")
  const getWeeks = (weeks: number) => getValue(weeks, "week")
  const getMonths = (months: number) => getValue(months, "month")

  const diffOnDays = Math.floor(
    (expirationDate.getTime() - today.getTime()) / (1000 * 3600 * 24),
  )

  if (diffOnDays < 7) {
    return getDays(diffOnDays)
  }

  if (diffOnDays < 30) {
    const diffOnWeeks = Math.floor(diffOnDays / 7)
    const restOfDays = Math.floor(diffOnDays % 7)
    return `${getWeeks(diffOnWeeks)} ${getDays(restOfDays)}`
  }

  const diffOnMonths = Math.floor(diffOnDays / 30)
  const restOfDays = diffOnDays - diffOnMonths * 30
  if (restOfDays < 7) {
    return `${getWeeks(diffOnMonths)} ${getDays(restOfDays)}`
  }

  const restOfWeeks = Math.floor(restOfDays / 7)
  const daysAfterWeeks = Math.floor(restOfDays % 7)
  return `${getMonths(diffOnMonths)} ${getWeeks(restOfWeeks)} ${getDays(
    daysAfterWeeks,
  )}`
}
