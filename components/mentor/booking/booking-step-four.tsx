interface BookingStepFourProps {
  menteeMessage: string
  handleMenteeMessageChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function BookingStepFour({ menteeMessage, handleMenteeMessageChange }: BookingStepFourProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <h2 className="text-lg font-medium lg:text-2xl">Step 4 | 멘토에게 전하는 말</h2>
      <textarea
        value={menteeMessage}
        placeholder="멘토에게 전하고 싶은 말을 입력해 주세요"
        onChange={handleMenteeMessageChange}
        className="w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none"
      />
    </div>
  )
}
