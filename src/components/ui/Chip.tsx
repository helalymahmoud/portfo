import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

/** Lightweight tag used for contributions and small technical details. */
export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-line bg-surface-muted px-2.5 py-1 text-xs text-ink-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}
