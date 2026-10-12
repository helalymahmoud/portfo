import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

/** Small uppercase label used to introduce a detail block. */
export function DetailLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h4
      className={cn(
        'font-mono text-[0.65rem] font-medium tracking-[0.16em] text-ink-faint uppercase',
        className,
      )}
    >
      {children}
    </h4>
  )
}
