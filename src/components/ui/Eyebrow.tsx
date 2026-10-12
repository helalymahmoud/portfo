import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface EyebrowProps {
  children: ReactNode
  className?: string
}

/** Small accent label that sits above a headline. */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        'flex items-center gap-2.5 font-mono text-[0.7rem] font-medium tracking-[0.2em] text-accent uppercase',
        className,
      )}
    >
      <span aria-hidden="true" className="inline-block size-1.5 rounded-full bg-accent" />
      {children}
    </p>
  )
}
