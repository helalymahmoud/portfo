import { useEffect, useState } from 'react'

/**
 * Track which page section is currently in view so the navigation can
 * highlight it. Uses a rAF-throttled scroll listener - cheap enough for
 * a handful of sections and more predictable than IntersectionObserver
 * for "closest to the top" behaviour.
 */
export function useScrollSpy(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')
  const key = sectionIds.join('|')

  useEffect(() => {
    const ids = key.split('|').filter(Boolean)
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (elements.length === 0) {
      return
    }

    let frame = 0

    const update = () => {
      frame = 0
      const line = window.innerHeight * 0.3
      let current = elements[0]?.id ?? ''

      for (const element of elements) {
        if (element.getBoundingClientRect().top - line <= 0) {
          current = element.id
        }
      }

      setActiveId((previous) => (previous === current ? previous : current))
    }

    const schedule = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)

    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame !== 0) {
        window.cancelAnimationFrame(frame)
      }
    }
  }, [key])

  return activeId
}
