export const compareDates = (date1?: string | Date, date2?: string | Date) => {
  // Check if either date is undefined
  if (!date1) return -1
  if (!date2) return 1

  // Convert to Date objects
  const d1 = new Date(date1)
  const d2 = new Date(date2)

  // Compare the dates
  if (d1 < d2) return -1
  if (d1 > d2) return 1

  return 0
}
