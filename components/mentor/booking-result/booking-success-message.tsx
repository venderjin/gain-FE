import { Check } from 'lucide-react'

export default function BookingSuccessMessage() {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#FF7A59]">
        <Check className="h-16 w-16 stroke-white" />
      </div>
      <h1 className="text-2xl font-medium">예약이 완료되었습니다!</h1>
      <span className="">
        멘토링 일정이 성공적으로 예약되었습니다.
        <br />
        이제 멘토와 함께 준비해볼까요?
      </span>
    </div>
  )
}
