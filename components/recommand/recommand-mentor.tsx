import Link from 'next/link'
import Image from 'next/image'

import Like from '@/components/icons/like'
import Star from '@/components/icons/star'

import { Button } from '@/components/ui/button'

import { RecommandMentorType } from '@/lib/mock/mentor'

interface RecommandMentorProps {
  mentor: RecommandMentorType
}

export default function RecommandMentor({ mentor }: RecommandMentorProps) {
  return (
    <div className="flex w-full flex-col items-center gap-2 rounded-lg border border-[#5A5A5A] bg-white p-6">
      <div className="relative flex justify-between gap-4">
        <div className="relative aspect-square h-full min-h-22 w-auto">
          <Image src={mentor.profileImage} alt={mentor.name} fill className="object-cover" />
        </div>
        <div className="flex flex-auto flex-col justify-between">
          <span className="text-lg font-medium">{mentor.name} 멘토</span>
          <span className="text-sm font-medium text-pretty text-[#767676]">{mentor.title}</span>
          <div className="flex space-x-2">
            {mentor.hashTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#767676] px-2 py-1 text-xs text-nowrap text-[#767676]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <Like />
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="flex w-24 items-center justify-center space-x-1">
          <Star />
          <span className="text-sm">{mentor.starRate}</span>
          <span className="text-sm">({mentor.reviewCount})</span>
        </div>
        <div className="text-xs font-medium text-[#767676]">{`"${mentor.reviewContent}"`}</div>
      </div>
      <Link href={`/mentor/profile/${mentor.id}`} className="flex w-full flex-col items-center">
        <Button className="mt-2 w-2/3 rounded-xl bg-[#D9D9D9]" size={'sm'}>
          프로필 상세 보기기
        </Button>
      </Link>
      <Link href={`/mentor/booking/${mentor.id}`} className="flex w-full flex-col items-center">
        <Button className="w-2/3 rounded-xl bg-[#FF7A59] text-white" size={'sm'}>
          멘토 매칭 시작
        </Button>
      </Link>
    </div>
  )
}
