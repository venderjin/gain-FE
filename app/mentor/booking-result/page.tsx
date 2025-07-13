import BookingSuccessMessage from '@/components/mentor/booking-result/booking-success-message'
import BookingSummary from '@/components/mentor/booking-result/booking-summary'

export default function BookingResultPage() {
  return (
    <div className="w-ful flex flex-col items-center justify-center py-10 lg:py-20">
      <div className="flex w-full max-w-[1024px] flex-col items-center gap-8 px-8 lg:gap-12">
        <BookingSuccessMessage />
        <BookingSummary />
      </div>
    </div>
  )
}
