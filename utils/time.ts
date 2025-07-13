export const createMinuteList = (options?: { gap?: number }) => {
  const { gap = 30 } = options || {}

  const result: number[] = []

  for (let i = 0; i < 1440; i += gap) {
    result.push(i)
  }

  if (result[result.length - 1] !== 1439) {
    result.push(1439)
  }

  return result
}

export const minutesToHHMMList = (minutes: number[]) => {
  return minutes.map((minute) => {
    const hours = Math.floor(minute / 60)
    const mins = minute % 60

    return {
      minute,
      hhmm: `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`,
    }
  })
}
