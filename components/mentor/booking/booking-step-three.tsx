import { Paperclip } from 'lucide-react'
import { useRef } from 'react'

interface BookingStepThreeProps {
  selectedFiles: File[]
  selectFiles: (files: File[]) => void
  portfolioLink: string
  handlePortfolioLinkChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function BookingStepThree({
  selectedFiles,
  selectFiles,
  portfolioLink,
  handlePortfolioLinkChange,
}: BookingStepThreeProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  // const [fileNames, setFileNames] = useState<string[]>([])

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return

    const newFiles = Array.from(files)
    selectFiles([...selectedFiles, ...newFiles])
    // 파일 input 값 초기화해서 같은 파일 선택해도 다시 업로드 가능하도록
    event.target.value = ''
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <h2 className="text-lg font-medium lg:text-2xl">Step 3 | 자료 첨부</h2>
      <div className="space-y-2">
        <div onClick={handleClick} className="flex w-fit cursor-pointer gap-2">
          <Paperclip className="h-6 w-6 rounded-lg border border-neutral-300 stroke-neutral-400 p-1" />
          <span>포트폴리오 PDF 업로드</span>
        </div>
        {/* 숨겨진 input */}
        <input ref={fileInputRef} type="file" accept=".pdf" multiple onChange={handleFileSelect} hidden />
        {/* 업로드 된 파일 이름 출력 */}
        {selectedFiles.length > 0 && (
          <ul className="mx-8 mt-3 list-disc space-y-1 text-sm text-gray-700">
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        )}
        <input
          type="text"
          placeholder="링크 추가"
          value={portfolioLink}
          onChange={handlePortfolioLinkChange}
          className="w-full rounded-lg border border-neutral-300 px-3 py-1 text-sm focus:outline-none"
        />
      </div>
    </div>
  )
}
