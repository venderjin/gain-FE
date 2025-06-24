import Image from 'next/image'

import { MentorProfileType } from '@/lib/mock/mentor'

interface MentorBookingHeaderProps {
  mentorProfile: MentorProfileType
}

export default function MentorBookingHeader({ mentorProfile }: MentorBookingHeaderProps) {
  console.log('멘토 예약 헤더:', mentorProfile)

  return (
    <div className="flex flex-row items-center gap-4">
      <div className="relative aspect-square h-full min-h-32 w-auto">
        <Image src={mentorProfile.profileImage} alt={mentorProfile.name} fill className="object-cover" />
      </div>
      <div className="relative flex flex-col justify-between gap-2">
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
      </div>
    </div>
  )
}
