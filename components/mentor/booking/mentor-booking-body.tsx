'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import BookingStepOne from './booking-step-one'
import BookingStepTwo from './booking-step-two'
import BookingStepThree from './booking-step-three'
import BookingStepFive from './booking-step-five'
import BookingStepFour from './booking-step-four'

const mentoringThemes = [
  { id: 1, name: '포트폴리오' },
  { id: 2, name: '이력서 피드백' },
  { id: 3, name: '유학 준비' },
  { id: 4, name: '커리어 컨설팅' },
  { id: 5, name: '기타' },
]

type MentoringTheme = (typeof mentoringThemes)[number]

export default function MentorBookingBody() {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState({ date: '', time: '' })
  // 멘토가 설정한 날짜만 가능하게 해아함
  // mvp 에서는 현재 ~ 3달 이후 주말 09시~17시 까지 가능하게 설정
  const [selectedMentoringTheme, setSelectedMentoringTheme] = useState<MentoringTheme>({ id: 0, name: '' })
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [portfolioLink, setPortfolioLink] = useState('')
  const [menteeMessage, setMenteeMessage] = useState('')

  const selectDate = (date?: string, time?: string) => {
    // date 는 '2025-06-01' 형식
    // time 은 '09:00' 형식
    if (date) {
      setSelectedDate((prev) => ({
        ...prev,
        date: date,
        time: time || prev.time, // time 이 없으면 이전 time 유지
      }))
    }
    if (time) {
      setSelectedDate((prev) => ({
        ...prev,
        time: time,
      }))
    }
  }

  const selectMentoringTheme = (themeId: number) => {
    if (themeId === selectedMentoringTheme.id) {
      setSelectedMentoringTheme({ id: 0, name: '' })
      return
    }
    const theme = mentoringThemes.find((t) => t.id === themeId)
    if (theme) {
      setSelectedMentoringTheme(theme)
    }
  }

  const selectFiles = (files: File[]) => {
    setSelectedFiles(files)
  }

  const handlePortfolioLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPortfolioLink(event.target.value)
  }

  const handleMenteeMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMenteeMessage(event.target.value)
  }

  const onSubmit = () => {
    // Handle form submission
    if (selectedDate.date === '' || selectedDate.time === '') {
      alert('날짜와 시간을 선택해 주세요.')
      return
    }
    if (selectedMentoringTheme.id === 0) {
      alert('멘토링 주제를 선택해 주세요.')
      return
    } else {
      // console.log('Booking Details:', {
      //   date: selectedDate.date,
      //   time: selectedDate.time,
      //   mentoringTheme: selectedMentoringTheme.name,
      //   files: selectedFiles.map((file) => file.name),
      //   portfolioLink: portfolioLink,
      //   menteeMessage: menteeMessage,
      // })
      router.push('/mentor/booking-result')
    }
  }

  return (
    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="space-y-20 bg-white lg:col-span-2">
        <BookingStepOne selectedDate={selectedDate} selectDate={selectDate} />
        <BookingStepTwo
          mentoringThemes={mentoringThemes}
          selectedMentoringTheme={selectedMentoringTheme}
          selectMentoringTheme={selectMentoringTheme}
        />
        <BookingStepThree
          selectedFiles={selectedFiles}
          selectFiles={selectFiles}
          portfolioLink={portfolioLink}
          handlePortfolioLinkChange={handlePortfolioLinkChange}
        />
        <BookingStepFour menteeMessage={menteeMessage} handleMenteeMessageChange={handleMenteeMessageChange} />
      </div>
      <BookingStepFive
        selectedDate={selectedDate}
        selectedMentoringTheme={selectedMentoringTheme}
        onSubmit={onSubmit}
      />
    </div>
  )
}
