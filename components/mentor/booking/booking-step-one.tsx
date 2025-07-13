'use client'

import { useState } from 'react'

import { useBookingAvailableDates } from '@/hooks/use-booking-available-date'
import { cn } from '@/lib/utils'

import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BookingCalendarProps {
  selectedDate: { date: string; time: string }
  selectDate: (date?: string, time?: string) => void
}

export default function BookingCalendar({ selectedDate, selectDate }: BookingCalendarProps) {
  const availableDates = useBookingAvailableDates()
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const availableTimes = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']

  // 현재 month 관리 (예: '2025-06')
  const months = Object.keys(availableDates)
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0)
  const currentMonth = months[currentMonthIndex]
  const days = availableDates[currentMonth] ?? []

  // 시작 요일에 따라 빈칸 채우기
  const startDayIndex = weekDays.findIndex((day) => day === days[0]?.day)
  const emptySlots = Array.from({ length: startDayIndex })
  // 셀 수 계산
  const totalDays = days.length + emptySlots.length
  const totalCells = Math.ceil(totalDays / 7) * 7 // 7의 배수로 행 수 맞추기
  const isPreviousMonth = currentMonthIndex > 0
  const isNextMonth = currentMonthIndex < months.length - 1

  return (
    <div className="flex w-full flex-col">
      <h2 className="text-lg font-medium lg:text-2xl">Step 1 | 날짜와 시간을 선택해 주세요</h2>

      <div className="py-4 lg:p-8">
        {/* 상단 네비게이션 */}
        <div className="flex items-center justify-between rounded-md px-4 py-2">
          <ChevronLeft
            className={(cn('h-6 w-6'), isPreviousMonth ? 'cursor-pointer' : 'text-neutral-300')}
            onClick={() => {
              if (isPreviousMonth) setCurrentMonthIndex((prev) => prev - 1)
            }}
          />
          <p className="text-lg font-bold lg:text-2xl">{currentMonth.replace('-', '년 ')}</p>
          <ChevronRight
            className={(cn('h-6 w-6'), isNextMonth ? 'cursor-pointer' : 'text-neutral-300')}
            onClick={() => {
              if (isNextMonth) setCurrentMonthIndex((prev) => prev + 1)
            }}
          />
        </div>

        {/* 요일 헤더 */}
        <div className="grid grid-cols-7 py-2 text-center text-sm font-medium lg:text-base">
          {weekDays.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 border border-neutral-200 text-center">
          {Array.from({ length: totalCells }).map((_, i) => {
            const cellDate = days[i - emptySlots.length] // 날짜 시작은 empty 이후부터

            return (
              <div
                key={i}
                className={cn(
                  'flex aspect-[4/3] items-center justify-center border border-neutral-200 text-sm lg:text-base',
                  cellDate
                    ? selectedDate.date === cellDate.date
                      ? 'cursor-pointer bg-[#FF7A59] text-white'
                      : new Date(cellDate.date).getTime() >= Date.now()
                        ? 'cursor-pointer hover:bg-[#FF7A59] hover:text-white'
                        : 'cursor-not-allowed text-neutral-300'
                    : 'bg-neutral-100',
                )}
                onClick={() => {
                  if (cellDate && new Date(cellDate.date).getTime() >= Date.now()) {
                    // 과거 날짜는 선택 불가
                    selectDate(cellDate.date)
                  }
                }}
              >
                {cellDate ? new Date(cellDate.date).getDate() : ''}
              </div>
            )
          })}
        </div>
      </div>
      <h3 className="text-base font-medium lg:text-lg">시간을 선택해주세요</h3>
      <div className="flex w-full flex-row gap-4 overflow-x-auto py-4 lg:px-4">
        {availableTimes.map((time) => (
          <button
            key={time}
            className={cn(
              'rounded-md border border-neutral-200 px-6 py-2 text-sm font-medium lg:px-8 lg:text-base',
              selectedDate.time === time
                ? 'cursor-pointer bg-[#FF7A59] text-white'
                : 'hover:bg-[#FF7A59] hover:text-white',
            )}
            onClick={() => selectDate(undefined, time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  )
}
