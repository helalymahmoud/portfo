import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { navItems, profile } from '../../data/profile'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { cn } from '../../lib/utils'
import { ButtonLink } from '../ui/Button'
import { CvDownloadButton } from '../ui/CvDownloadButton'

const SECTION_IDS = navItems.map((item) => item.id)

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Solidify the bar once the page is scrolled.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the mobile menu when the viewport grows to the desktop layout.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 64rem)')
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false)
    }
    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [])

  // Support Escape and lock background scroll while the menu is open.
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    panelRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'border-b transition-colors duration-300',
          isScrolled || isOpen
            ? 'border-line bg-canvas/85 backdrop-blur-md'
            : 'border-transparent bg-transparent',
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 rounded-lg"
            aria-label={`${profile.displayName} — go to top`}
          >
            <span className="grid size-9 place-items-center rounded-lg bg-accent font-mono text-sm font-semibold text-accent-ink shadow-accent">
              {profile.initials}
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-ink sm:block">
              {profile.displayName}
            </span>
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeId === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      aria-current={isActive ? 'true' : undefined}
                      className={cn(
                        'rounded-full px-3 py-2 text-sm transition-colors duration-200',
                        isActive
                          ? 'bg-accent-tint font-medium text-accent'
                          : 'text-ink-muted hover:text-ink',
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <CvDownloadButton statusPlacement="hidden" />
            </div>
            <ButtonLink href="#contact" className="hidden lg:inline-flex">
              Let’s talk
            </ButtonLink>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="grid size-10 place-items-center rounded-lg border border-line-strong bg-surface text-ink transition-colors hover:border-accent hover:text-accent lg:hidden"
            >
              {isOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen ? (
        <div
          ref={panelRef}
          id="mobile-nav"
          className="animate-[rise-in_0.2s_var(--ease-out-soft)] border-b border-line bg-canvas/95 backdrop-blur-md lg:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-6xl px-5 pt-2 pb-6 sm:px-8">
            <ul className="flex flex-col">
              {navItems.map((item) => {
                const isActive = activeId === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive ? 'true' : undefined}
                      className={cn(
                        'block rounded-lg px-3 py-3 text-base transition-colors',
                        isActive
                          ? 'bg-accent-tint font-medium text-accent'
                          : 'text-ink-muted hover:bg-surface-muted hover:text-ink',
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
            <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-line pt-4">
              <ButtonLink href="#contact" onClick={() => setIsOpen(false)}>
                Let’s talk
              </ButtonLink>
              <CvDownloadButton statusPlacement="inline" />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
