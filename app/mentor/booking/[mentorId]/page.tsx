import MentorBookingBody from '@/components/mentor/booking/mentor-booking-body'
import MentorBookingHeader from '@/components/mentor/booking/mentor-booking-header'
import { mentorProfile } from '@/lib/mock/mentor'

interface MentorBookingPageParams {
  mentorId: string
}

export default async function MentorBookingPage({ params }: { params: MentorBookingPageParams }) {
  const { mentorId } = await params
  console.log('멘토 예약 페이지:', mentorId)

  return (
    <div className="w-ful flex flex-col items-center justify-center bg-blue-200 py-10 lg:py-20">
      <div className="flex w-full max-w-[1024px] flex-col items-center gap-12 bg-violet-200 px-8">
        <MentorBookingHeader mentorProfile={mentorProfile} />
        <MentorBookingBody />
      </div>
    </div>
  )
}
