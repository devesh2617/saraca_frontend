import { formatDistance } from "date-fns"

export function formatDateDistance(date: Date) {
  const now = new Date()
  const daysAgo = formatDistance(date, now, { addSuffix: true })
  return daysAgo
}