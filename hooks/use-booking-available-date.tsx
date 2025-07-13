import { useMemo } from 'react'

type DayInfo = {
  date: string
  day: string
}

type MonthGroupedDates = {
  [month: string]: DayInfo[]
}

const getMonthKey = (date: Date) => `${date.getFullYear()} ${date.toLocaleString('en-US', { month: 'long' })}`

const getMonthDates = (year: number, month: number): [string, DayInfo[]] => {
  const date = new Date(year, month, 1)
  const monthKey = getMonthKey(date)

  const result: DayInfo[] = []

  while (date.getMonth() === month) {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const d = String(date.getDate()).padStart(2, '0')

    result.push({
      date: `${y}-${m}-${d}`,
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
    })

    date.setDate(date.getDate() + 1)
  }

  return [monthKey, result]
}

export const useBookingAvailableDates = (): MonthGroupedDates => {
  const today = new Date()

  const groupedDates = useMemo(() => {
    const year = today.getFullYear()
    const month = today.getMonth()

    const entries = [
      getMonthDates(year, month),
      getMonthDates(month === 11 ? year + 1 : year, (month + 1) % 12),
      getMonthDates(month >= 10 ? year + 1 : year, (month + 2) % 12),
    ]

    return Object.fromEntries(entries)
  }, [])

  return groupedDates
}
