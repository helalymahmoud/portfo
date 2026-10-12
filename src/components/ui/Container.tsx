import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  /** Narrower measure for text-heavy sections. */
  size?: 'default' | 'narrow'
}

/** Centered, responsive content wrapper used by every section. */
export function Container({ children, className, size = 'default' }: ContainerProps) {
  return (
    <div
      className={[
        'mx-auto w-full px-5 sm:px-8',
        size === 'narrow' ? 'max-w-3xl' : 'max-w-6xl',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
