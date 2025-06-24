// import { mentoringThemes } from '@/constants/booking'

// interface BookingStepTwoProps {
//   selectedMentoringThemeList: number[]
//   setSelectedMentoringThemeList: (themes: number[]) => void
// }

export default function BookingStepTwo() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-blue-100 p-4">
      <h2 className="mb-4 text-2xl font-bold">Step 2 | 멘토링 주제를 선택해 주세요</h2>
      <p className="mb-6 text-lg">멘토링을 원하는 주제를 선택해주세요.</p>
      {/* 여기에 멘토링 주제 선택 컴포넌트나 UI 요소를 추가할 수 있습니다. */}
    </div>
  )
}
