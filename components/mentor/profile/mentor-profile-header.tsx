import Image from 'next/image'

import Face from '@/components/icons/face'
import Like from '@/components/icons/like'
import Chat from '@/components/icons/chat'

import { Button } from '@/components/ui/button'

import { MentorProfileType } from '@/lib/mock/mentor'

interface MentorProfileHeaderType {
  mentorProfile: MentorProfileType
}

export default function MentorProfileHeader({ mentorProfile }: MentorProfileHeaderType) {
  return (
    <div className="flex w-full flex-col items-center gap-4 lg:flex-row">
      <div className="relative aspect-square h-full min-h-44 w-auto">
        <Image src={mentorProfile.profileImage} alt={mentorProfile.name} fill className="object-cover" />
      </div>
      <div className="relative flex w-full flex-col justify-between gap-2">
        <h1 className="text-4xl font-medium">{mentorProfile.name}</h1>
        <p className="text-xl font-medium text-[#5A5A5A]">{mentorProfile.title}</p>
        <div className="flex space-x-2">
          {mentorProfile.hashTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#5A5A5A] px-2 py-1 text-xs text-nowrap text-[#5A5A5A]"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-0">
          <div className="mb-1 flex flex-row items-center gap-2">
            <Face />
            <p className="text-xs text-[#5A5A5A]">누적 멘티수: {mentorProfile.cumulativeMenteeCount}</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Chat />
            <p className="text-xs text-[#5A5A5A]">응답 가능 시간: {mentorProfile.responseTime}</p>
          </div>
          <span className="text-[0.65rem] text-pretty text-[#5A5A5A]">
            *전 세계 다양한 지역에 계신 멘토님들과 연결되므로
            <br />
            시차로 인해 응답까지 시간이 소요될 수 있습니다.
          </span>
        </div>
        <div className="absolute top-0 right-0">
          <Like width={30} height={28} />
        </div>
        <div className="flex lg:absolute lg:right-0 lg:bottom-0">
          <Button className="h-auto border border-[#5A5A5A] px-4 py-1" size="sm">
            <p className="text-sm">문의하기</p>
          </Button>
        </div>
      </div>
    </div>
  )
}
