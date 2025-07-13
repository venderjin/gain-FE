import { Button } from '@/components/ui/button'

interface BookingStepFiveProps {
  selectedDate: { date: string; time: string }
  selectedMentoringTheme: { id: number; name: string }
  onSubmit: () => void
}

export default function BookingStepFive({ selectedDate, selectedMentoringTheme, onSubmit }: BookingStepFiveProps) {
  const formatDate = (dateString: string) => {
    if (dateString === '') return ''
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = date.getMonth() + 1 // 0부터 시작하므로 +1
    const day = date.getDate()
    const weekDay = date.toLocaleDateString('ko-KR', { weekday: 'short' }) // 예: 토

    return `${year}년 ${month}월 ${day}일 (${weekDay})`
  }

  return (
    <div className="sticky top-8 flex h-fit w-full flex-col">
      <h2 className="mb-4 text-lg font-medium lg:text-2xl">Step 5 | 결제</h2>
      <div className="mx-2 flex min-h-[120px] flex-col border-b border-neutral-200 px-2 py-3">
        <p className="text-lg font-medium">예약 시간</p>
        <span className="py-1 font-medium">
          {formatDate(selectedDate.date)}
          <br />
          {selectedDate.time}
        </span>
      </div>
      <div className="mx-2 flex min-h-[100px] flex-col border-b border-neutral-200 px-2 py-3">
        <p className="text-lg font-medium">멘토링 주제</p>
        <span className="py-1 font-medium">{selectedMentoringTheme.name}</span>
      </div>
      <div className="mx-2 flex min-h-[100px] flex-col px-2 py-3">
        <p className="text-lg font-medium">요금</p>
        <span className="py-1 font-medium">50,000원</span>
      </div>
      <Button onClick={onSubmit} className="w-full rounded-lg bg-[#FF7A59] text-white" size={'lg'}>
        멘토 매칭 시작
      </Button>
    </div>
  )
}
