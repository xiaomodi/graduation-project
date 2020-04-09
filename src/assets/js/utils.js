export function getYearMonthDay (date) {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  return {
    year,
    month,
    day
  }
}

export function getDate (year, month, day) {
  return new Date(year, month, day)
}
