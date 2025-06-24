'use client'
import { Children, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils' // 클래스 병합 헬퍼가 있다면

interface CarouselProps {
  children: React.ReactNode // 슬라이드로 쓸 JSX들
  className?: string
}

export default function Carousel({ children, className }: CarouselProps) {
  const total = Children.count(children) // 슬라이드 개수
  const [current, setCurrent] = useState(0) // 현재 인덱스

  const prev = () => setCurrent((i) => (i === 0 ? total - 1 : i - 1))
  const next = () => setCurrent((i) => (i === total - 1 ? 0 : i + 1))

  return (
    <div className={cn('relative overflow-hidden rounded-lg', className)}>
      {/* 슬라이드 트랙 */}
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
        {children}
      </div>
      {/* 왼쪽 화살표 */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-white/50 p-2 shadow-md"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      {/* 오른쪽 화살표 */}
      <button
        onClick={next}
        className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-white/50 p-2 shadow-md"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}
