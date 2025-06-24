// 'use client'

// import { useState } from 'react'
// import BookingStepTwo from './booking-step-two'

export default function MentorBookingBody() {
  // const [selectedDate, setSelectedDate] = useState(new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }))
  // 멘토가 설정한 날짜만 가능하게 해아함
  // mvp 에서는 현재 ~ 3달 이후 주말 09시~17시 까지 가능하게 설정
  // const [selectedMentoringThemeList, setSelectedMentoringThemeList] = useState<number[]>([])

  // const checkMentoringTheme = (themeId: number) => {
  //   if (selectedMentoringThemeList.includes(themeId)) {
  //     setSelectedMentoringThemeList(selectedMentoringThemeList.filter((id) => id !== themeId))
  //   } else {
  //     setSelectedMentoringThemeList([...selectedMentoringThemeList, themeId].sort((a, b) => a - b))
  //   }
  // }

  return (
    <div className="grid w-full grid-cols-1 items-center gap-4 bg-green-100 lg:grid-cols-3">
      <div className="bg-red-300 lg:col-span-2">
        test
        {/* <BookingStepTwo  selectedMentoringThemeList={selectedMentoringThemeList} setSelectedMentoringThemeList={setSelectedMentoringThemeList} /> */}
      </div>
      <div className="bg-amber-200">
        test step5
        {/* step 5 에서 받아야할 정보 : 예약일정 + 멘토링 주제 */}
      </div>
    </div>
  )
}
