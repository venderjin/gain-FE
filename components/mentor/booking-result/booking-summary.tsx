import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function BookingSummary() {
  return (
    <div className="w-full max-w-[500px] space-y-8">
      <div className="border border-neutral-200 p-8">
        <p className="mb-2 text-lg font-medium">예약 상세정보</p>
        <div className="divide-y divide-neutral-300">
          <p className="flex justify-between gap-4 px-0 py-3">
            <span className="text-nowrap text-neutral-400">예약 멘토</span>
            <span className="text-right text-pretty">정민주 멘토</span>
          </p>
          <p className="flex justify-between gap-4 px-0 py-3">
            <span className="text-nowrap text-neutral-400">예약 날짜</span>
            <span className="text-right text-pretty">2023년 5월 18일(목) 21:00</span>
          </p>
          <p className="flex justify-between gap-4 px-0 py-3">
            <span className="text-nowrap text-neutral-400">멘토링 주제</span>
            <span className="text-right text-pretty">포트폴리오 피드백</span>
          </p>
          <p className="flex justify-between gap-4 px-0 py-3">
            <span className="text-nowrap text-neutral-400">결제 금액</span>
            <span className="text-right text-pretty">50,000원</span>
          </p>
        </div>
      </div>
      <div className="rounded-xl bg-neutral-100 p-4">
        <p className="mb-2 text-sm text-neutral-500">[멘토링 준비 가이드]</p>
        <ul className="list-disc pl-5 text-xs text-neutral-500">
          <li>Zoom링크는 세션 시작 10분전에 이메일로 발송됩니다.</li>
          <li>사전 질문을 준비해두시면 더 풍부한 상담이 가능합니다.</li>
          <li>준비물 : 포트폴리오 PDF, 질문 리스트 등</li>
          <li>궁금한 점이 있으면 gain-mentoring으로 문의하세요.</li>
        </ul>
      </div>
      <Link href="/mypage/booking" className="w-full">
        <Button className="w-full rounded-lg bg-[#FF7A59] text-lg text-white" size={'lg'}>
          나의 예약 확인하기
        </Button>
      </Link>
    </div>
  )
}
