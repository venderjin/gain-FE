import Image from 'next/image'

import Star from '@/components/icons/star'
import DefaultProfile from '@/components/icons/defaultProfile'
import Career from '@/components/icons/career'
import Education from '@/components/icons/education'

import { MentorProfileType } from '@/lib/mock/mentor'

interface MentorProfileBodyProps {
  mentorProfile: MentorProfileType
}

export default function MentorProfileBody({ mentorProfile }: MentorProfileBodyProps) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-medium">멘토링 후기</h1>
        <div className="flex min-h-40 w-full flex-row gap-4 overflow-x-auto">
          {mentorProfile.review.map((item) => (
            <div key={item.id} className="flex h-full min-w-80 flex-1 flex-row gap-3 overflow-hidden bg-slate-100 p-6">
              <div className="flex flex-col items-center gap-2">
                {item.menteeProfileImage === null ? (
                  <>
                    <DefaultProfile />
                    <p className="text-xs text-[#5A5A5A]">{item.menteeName[0]}**</p>
                  </>
                ) : (
                  <Image src="/defaultProfile.png" alt={item.menteeName} width={40} height={40} />
                )}
              </div>
              <div className="flex flex-auto flex-col justify-between gap-2">
                <span className="text-xs text-pretty text-black">{item.content}</span>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {Array.from({ length: item.starRate }).map((_, idx) => (
                      <Star key={idx} />
                    ))}
                    <p className="ml-1 text-xs font-semibold">{item.starRate.toFixed(1)}</p>
                  </div>
                  <span className="text-xs text-[#5A5A5A]">{new Date(item.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-medium">소개</h1>
        <div className="flex h-fit w-full flex-row bg-slate-100 p-6">
          <p className="text-sm whitespace-pre-line">{mentorProfile.introduction}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex-1">
          <h1 className="text-2xl font-medium">경력</h1>
          <div className="flex h-fit w-full flex-col gap-3 bg-slate-100 p-6">
            {mentorProfile.career.map((item) => (
              <div key={item.id} className="flex flex-row gap-3">
                <Career />
                <div className="flex h-fit w-full flex-col gap-1">
                  <h2 className="text-xs font-semibold">{item.title}</h2>
                  <p className="text-xs">{item.period}</p>
                  <p className="text-xs whitespace-pre-line">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-medium">학력</h1>
          <div className="flex h-fit w-full flex-col gap-3 bg-slate-100 p-6">
            {mentorProfile.education.map((item) => (
              <div key={item.id} className="flex flex-row gap-3">
                <Education />
                <div className="flex h-fit w-full flex-col gap-1">
                  <h2 className="text-xs font-semibold">{item.title}</h2>
                  <p className="text-xs">{item.period}</p>
                  <p className="text-xs whitespace-pre-line">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
