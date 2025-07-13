import Link from 'next/link'

import MentorProfileHeader from '@/components/mentor/profile/mentor-profile-header'
import { Button } from '@/components/ui/button'

import { mentorProfile } from '@/lib/mock/mentor'
import MentorProfileBody from '@/components/mentor/profile/mentor-profile-body'
import MentorProfilePortpolio from '@/components/mentor/profile/mentor-profile-portpolio'

interface MentorProfilePageParams {
  mentorId: string
}

export default async function MentorProfilePage({ params }: { params: Promise<MentorProfilePageParams> }) {
  const { mentorId } = await params

  return (
    <div className="w-ful flex flex-col items-center justify-center py-10 lg:py-20">
      <div className="grid w-full max-w-[1024px] grid-cols-1 flex-col gap-4 px-8 lg:grid-cols-3">
        <div className="flex flex-col gap-8 lg:col-span-2">
          <MentorProfileHeader mentorProfile={mentorProfile} />
          <div className="flex flex-col items-center">
            <Link href={`/mentor/booking/${mentorId}`} className="flex w-fit justify-center">
              <Button className="rounded-xl bg-[#FF7A59] text-white" size={'lg'}>
                멘토링 시작하기
              </Button>
            </Link>
          </div>
          {/* 모바일에서 포트폴리오 Carousel 형식으로 확인하기 */}
          <MentorProfilePortpolio mentorProfile={mentorProfile} className="lg:hidden" />
          <MentorProfileBody mentorProfile={mentorProfile} />
        </div>
        {/* 데스크탑에서 포트폴리오 리스트 형식으로 확인하기 */}
        <MentorProfilePortpolio mentorProfile={mentorProfile} className="hidden lg:flex" />
      </div>
    </div>
  )
}
