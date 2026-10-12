import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string
  /** id of the heading element that labels this section. */
  labelledBy?: string
  children: ReactNode
  /** Reduces vertical padding when a section follows another closely. */
  spacious?: boolean
}

/** Semantic page section with consistent vertical rhythm. */
export function Section({
  id,
  labelledBy,
  children,
  className,
  spacious = true,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(spacious ? 'py-20 sm:py-24 lg:py-28' : 'py-14 sm:py-16', className)}
      {...rest}
    >
      {children}
    </section>
  )
}
