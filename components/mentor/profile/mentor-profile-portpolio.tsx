import Carousel from '@/components/ui/carousel'

import { MentorProfileType } from '@/lib/mock/mentor'

import { cn } from '@/lib/utils'

interface MentorProfilePortpolioProps {
  mentorProfile: MentorProfileType
  className?: string
}

export default function MentorProfilePortpolio({ mentorProfile, className }: MentorProfilePortpolioProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <h1 className="text-2xl font-medium">나를 대표하는 포트폴리오</h1>
      <Carousel className="lg:hidden">
        {mentorProfile.portpolio.map((item) => (
          <div key={item.id} className={`h-40 w-full shrink-0 text-transparent ${item.className}`}>
            {item.title}
          </div>
        ))}
      </Carousel>
      <div className="hidden flex-col items-center justify-center gap-4 lg:flex">
        {mentorProfile.portpolio.map((item) => (
          <div key={item.id} className="h-40 w-full bg-slate-100 text-transparent">
            {item.title}
          </div>
        ))}
      </div>
    </div>
  )
}
