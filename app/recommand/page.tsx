import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

import { recommandMentor } from '@/lib/mock/mentor'
import RecommandMentor from '@/components/recommand/recommand-mentor'
import Tooltip from '@/components/ui/tooltip'

export default function RecommandPage() {
  return (
    <div className="w-ful flex flex-col items-center justify-center py-10 lg:py-20">
      <div className="flex w-full max-w-[1024px] flex-col items-center px-8">
        <h1 className="mb-8 text-center text-3xl font-medium text-pretty">멘티님에게 맞는 TOP 3 추천</h1>
        <p className="text-center font-medium text-pretty text-[#BFC1C2]">
          <span>1:1 멘토링으로 나의 포트폴리오 방향부터 디테일까지 리뷰를 받아 보세요.</span>
          <br />
          <span className="text-[#FF7A59]">미국 + UX/UI </span>
          <span>관심을 기준으로 적합한 추천을 받아보세요.</span>
        </p>
        <div className="relative mb-8 flex w-full flex-col items-end">
          {/* 공간은 항상 존재, 내용만 숨김 */}
          <Tooltip>
            <p className="text-xs">TOP 3 추천 결과가 마음에 들지 않나요?</p>
            <p className="text-xs">목표 학교나 회사 등을 추가해 더욱 정밀한 추천을 받아보세요.</p>
          </Tooltip>
          <Button className="mt-3 w-fit gap-1 border border-[#767676]" size="sm">
            <p className="text-sm">관심 조건 추가하기</p>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid w-full gap-4 lg:grid-cols-3">
          {recommandMentor.map((mentor) => (
            <RecommandMentor key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>
    </div>
  )
}
