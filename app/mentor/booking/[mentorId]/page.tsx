import MentorBookingBody from '@/components/mentor/booking/mentor-booking-body'
import MentorBookingHeader from '@/components/mentor/booking/mentor-booking-header'
import { mentorProfile } from '@/lib/mock/mentor'

// interface MentorBookingPageParams {
//   mentorId: string
// }

export default async function MentorBookingPage() {
  // { params }: { params: MentorBookingPageParams }
  // const { mentorId } = await params
  // console.log('멘토 ID:', mentorId)

  return (
    <div className="w-ful flex flex-col items-center justify-center py-10 lg:py-20">
      <div className="flex w-full max-w-[1024px] flex-col items-center gap-8 px-8 lg:gap-12">
        <MentorBookingHeader mentorProfile={mentorProfile} />
        <MentorBookingBody />
      </div>
    </div>
  )
}
