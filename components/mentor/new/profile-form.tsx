'use client'

import { useState } from 'react'
import { useClickOutSide } from '@/hooks/use-click-outside'
import { createMinuteList, minutesToHHMMList } from '@/utils/time'
import { DAYS_OF_THE_WEEK } from '@/constants/time'
import Camera from '@/components/icons/camera'
import Check from '@/components/icons/check'
import Plus from '@/components/icons/plus'
import Image from 'next/image'
import ChevronDown from '@/components/icons/chevron-down'

type Preview = { file: File; url: string }

type Day = (typeof DAYS_OF_THE_WEEK)[number]

type HHMM = (typeof hhmmList)[number]

const hhmmList = minutesToHHMMList(createMinuteList())

export default function MentorProfileForm() {
  const [profileUrl, setProfileUrl] = useState<Preview | null>()
  const [desc, setDesc] =
    useState(`UX 디자인 실무에서 10년 넘게 일하며 스타트업부터 글로벌 빅테크까지 다양한 조직을 경험했습니다. 미국 취업과 UX 포트폴리오 설계에 대한 인사이트를 나누고 싶어 GAIN 멘토링을 시작하게 되었고, 단순한 코멘트가 아닌 ‘어떻게 전달해야 설득력 있는 포폴이 될 수 있을지’를 함께 고민합니다.

멘토링은 다음과 같은 방식으로 진행됩니다.
사전 제출된 포트폴리오(또는 이력서)를 바탕으로 먼저 전체 구조를 함께 검토합니다.
문제점과 개선 포인트를 중심으로 구체적인 수정 방향을 드리며, 포인`)
  const [selectedDays, setSelectedDays] = useState<Day[]>([])
  const [startToEnd, setStartToEnd] = useState<{
    start: HHMM | null
    end: HHMM | null
  }>({ start: null, end: null })
  const [photos, setPhotos] = useState<Preview[]>([])
  const [details] = useState({
    education: { label: '학력' },
    experience: { label: '경력' },
    projects: { label: '프로젝트' },
    skills: { label: '기술' },
    attachments: { label: '첨부자료' },
  })

  return (
    <div className="flex flex-col items-center gap-[150px] px-[16px] py-[98px]">
      <div className="flex w-[min(1462px,100%)] flex-col gap-[50px]">
        <div className="flex flex-col gap-[50px]">
          <div className="flex flex-col gap-[50px]">
            <div className="flex flex-col gap-[60px]">
              <div className="text-title text-center">GAIN과 함께 첫걸음을 시작해보세요</div>

              <div className="flex flex-col items-center gap-[40px]">
                <div className="text-sub-title">멘토님의 상세 프로필을 작성해주세요.</div>

                <div className="text-desc flex w-[min(482px,100%)] flex-col text-center">
                  <span>
                    구체적으로 작성할 수록 좋습니다. 당신의 경력, 현재 하고 있는 일, 멘토로서 적합한 이유에 대해 다른
                    회원들에게 알려주세요.
                  </span>

                  <span>
                    입력하신 정보는 언제든지 <span className="text-orange-normal">내 프로필</span>에서 수정할 수
                    있습니다.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-[50px]">
              <div className="flex flex-col gap-[20px]">
                <div className="text-2xl">매칭 프로필 사진</div>

                <div className="border-gray-normal flex flex-1 flex-col rounded-[12px] border px-[33px] py-[26px]">
                  <div className="flex justify-end">
                    <label htmlFor="profile">
                      <div className="bg-orange-normal text-white-normal flex size-[60px] items-center justify-center rounded-full">
                        <Camera />
                      </div>

                      <input
                        id="profile"
                        type="file"
                        hidden
                        onChange={(e) => {
                          try {
                            const file = (e.target.files ?? [])[0]

                            const reader = new FileReader()
                            reader.onloadend = () => {
                              const url = reader.result as string

                              setProfileUrl({ file, url })
                            }
                            reader.readAsDataURL(file)
                          } finally {
                            e.target.value = ''
                          }
                        }}
                      />
                    </label>
                  </div>

                  <div className="bg-gray-normal relative size-[256px] overflow-hidden rounded-full">
                    {profileUrl && <Image src={profileUrl.url} alt="profile" fill className="object-contain" />}
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-[20px]">
                <div className="text-2xl">간단 소개글</div>

                <div className="border-gray-normal flex max-h-[369px] flex-1 flex-col rounded-[12px] border px-[44px] py-[50px]">
                  <div className="scrollbar size-full max-w-[641px] overflow-y-auto pr-[35px] text-lg whitespace-pre-wrap">
                    <textarea
                      ref={(node) => {
                        if (!node) return

                        node.style.height = 'auto'
                        node.style.height = `${node.scrollHeight}px`
                      }}
                      className="size-full resize-none outline-none"
                      placeholder="소개글을 입력해주세요"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[20px]">
                <div className="invisible text-2xl">연락 날짜</div>

                <div className="border-gray-normal flex flex-1 flex-col rounded-[12px] border px-[40px] py-[20px]">
                  <div className="flex flex-col gap-[50px]">
                    <div className="flex flex-col gap-[10px]">
                      <div className="flex flex-col gap-[10px]">
                        <div className="text-2xl">연락 가능 요일</div>

                        <div className="text-md">연락 가능한 요일을 선택해주세요. 중복선택 가능</div>
                      </div>

                      <div className="flex gap-[28px]">
                        {DAYS_OF_THE_WEEK.map((day) => {
                          const { key, label } = day

                          const isSelected = selectedDays.some(({ key: selectedKey }) => selectedKey === key)

                          return (
                            <button
                              key={key}
                              type="button"
                              onClick={() =>
                                setSelectedDays((prev) =>
                                  isSelected
                                    ? prev.filter(({ key: selectedKey }) => selectedKey !== key)
                                    : [...prev, day],
                                )
                              }
                            >
                              <div className="flex flex-col gap-[10px]">
                                <div className="text-xl">{label}</div>

                                <div
                                  className={`${isSelected ? 'bg-orange-normal' : 'bg-gray-normal'} text-white-normal flex size-[20px] items-center justify-center rounded-full`}
                                >
                                  {isSelected && <Check />}
                                </div>
                              </div>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div className="flex flex-col gap-[10px]">
                      <div className="text-2xl">연락 가능 시간</div>

                      <div className="flex items-end gap-[10px]">
                        <div className="flex flex-1 flex-col gap-[10px]">
                          <div className="text-xl">시작</div>

                          <TimePicker
                            selectedValue={startToEnd.start?.hhmm}
                            onSelectTime={(start) => setStartToEnd((prev) => ({ ...prev, start }))}
                          />
                        </div>

                        <div className="text-2xl-regular">~</div>

                        <div className="flex flex-1 flex-col gap-[10px]">
                          <label htmlFor="end-time" className="text-xl">
                            종료
                          </label>

                          <TimePicker
                            selectedValue={startToEnd.end?.hhmm}
                            onSelectTime={(end) => setStartToEnd((prev) => ({ ...prev, end }))}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <div className="text-2xl">나를 대표하는 사진</div>

            <div className="text-lg">
              작업 스타일이나 경력을 보여줄 이미지를 등록해 주세요. (예: 작업물, 포트폴리오 일부, 활동 사진 등)
            </div>

            <div className="grid grid-cols-3 gap-[46px]">
              {photos.map((photo, index) => {
                const { url } = photo

                const inputId = `photo-${index}`

                return (
                  <label key={inputId} htmlFor={inputId}>
                    <div className="border-gray-normal text-gray-normal flex h-full flex-col items-center justify-center gap-[20px] border px-[162px] py-[77px]">
                      {url ? (
                        <div className="bg-gray-normal relative size-[256px] overflow-hidden rounded-full">
                          {url && <Image src={url} alt="profile" fill className="object-contain" />}
                        </div>
                      ) : (
                        <>
                          <div className="flex size-[48px] items-center justify-center">
                            <Plus />
                          </div>

                          <div className="text-2xl-medium whitespace-nowrap">사진 추가하기</div>
                        </>
                      )}
                    </div>

                    <input
                      id={inputId}
                      type="file"
                      hidden
                      onChange={(e) => {
                        try {
                          const file = (e.target.files ?? [])[0]

                          const reader = new FileReader()
                          reader.onloadend = () => {
                            const url = reader.result as string

                            setPhotos((prev) =>
                              prev.map((prevPhoto, prevIndex) => (prevIndex === index ? { file, url } : prevPhoto)),
                            )
                          }
                          reader.readAsDataURL(file)
                        } finally {
                          e.target.value = ''
                        }
                      }}
                    />
                  </label>
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[40px]">
          {Object.entries(details).map(([key, { label }]) => (
            <div
              key={key}
              className="border-gray-normal flex items-center gap-[30px] rounded-[12px] border px-[30px] py-[23px]"
            >
              <div className="bg-gray-dark size-[70px] rounded-full"></div>

              <div className="flex-1 text-3xl">{label}</div>

              <div className="border-gray-dark size-[70px] rounded-full border"></div>
            </div>
          ))}
        </div>
      </div>

      {/* 액션 버튼 */}
      <div className="flex w-full items-center justify-center gap-[30px]">
        <button type="button">
          <div className="bg-gray-normal text-lm w-[min(240px,100%)] rounded-[12.96px] px-[106px] py-[13px]">이전</div>
        </button>

        <button type="button">
          <div className="bg-orange-normal text-lm text-white-normal w-[min(240px,100%)] rounded-[12.96px] px-[106px] py-[13px]">
            이전
          </div>
        </button>
      </div>
    </div>
  )
}

const TimePicker = ({
  selectedValue,
  onSelectTime,
}: {
  selectedValue?: string
  onSelectTime: (time: HHMM) => void
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const { ref } = useClickOutSide<HTMLButtonElement>({ callback: () => setIsOpen(false) })

  const toggle = () => setIsOpen((prev) => !prev)

  return (
    <div className="relative flex flex-col">
      <button ref={ref} className="flex-1" onClick={toggle}>
        <div className="border-gray-normal text-md flex items-center justify-between gap-[4px] rounded-[12px] border px-[15px] py-[7px] text-start">
          <div className={`${selectedValue ? '' : 'text-gray-normal'} text-md`}>{selectedValue || '시간 선택'}</div>

          <div className={`${selectedValue ? '' : 'text-gray-normal'} flex size-[16px] items-center justify-center`}>
            <ChevronDown />
          </div>
        </div>
      </button>

      {isOpen && (
        <div
          className="bg-white-normal absolute top-[40px] flex max-h-[160px] w-full flex-col overflow-y-auto p-2 shadow-lg"
          onMouseDownCapture={(e) => e.stopPropagation()}
        >
          {hhmmList.map((time) => {
            const { minute, hhmm } = time

            return (
              <button
                key={minute}
                type="button"
                onClick={() => {
                  try {
                    onSelectTime(time)
                  } finally {
                    toggle()
                  }
                }}
              >
                <div className="hover:bg-gray-normal rounded-[8px] px-4 py-2 text-start">{hhmm}</div>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
