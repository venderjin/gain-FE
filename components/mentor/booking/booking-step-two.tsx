interface BookingStepTwoProps {
  mentoringThemes: { id: number; name: string }[]
  selectedMentoringTheme: { id: number; name: string }
  selectMentoringTheme: (themeid: number) => void
}

export default function BookingStepTwo({
  mentoringThemes,
  selectedMentoringTheme,
  selectMentoringTheme,
}: BookingStepTwoProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <h2 className="text-lg font-medium lg:text-2xl">Step 2 | 멘토링 주제를 선택해 주세요</h2>
      <div className="flex flex-row flex-wrap space-y-4 space-x-8 border border-neutral-200 px-8 py-4">
        {mentoringThemes.map((theme) => (
          <div className="flex items-center gap-1" key={theme.id}>
            <input
              type="checkbox"
              id={`theme-${theme.id}`}
              checked={selectedMentoringTheme.id === theme.id}
              onChange={() => selectMentoringTheme(theme.id)}
              className="h-4 w-4 cursor-pointer rounded border-none fill-amber-200 accent-[#FF7A59]"
            />
            <span className="cursor-pointer" onClick={() => selectMentoringTheme(theme.id)}>
              {theme.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
