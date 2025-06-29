import { useEffect, useRef } from 'react'

export const useClickOutSide = <T extends HTMLElement>({ callback }: { callback: () => void }) => {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as T)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return { ref }
}
