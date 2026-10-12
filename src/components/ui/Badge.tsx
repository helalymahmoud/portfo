import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

export type BadgeTone = 'neutral' | 'accent' | 'strong' | 'muted'

const TONES: Record<BadgeTone, string> = {
  neutral: 'border-line bg-surface-muted text-ink-muted',
  accent: 'border-accent/25 bg-accent-tint text-accent',
  strong: 'border-transparent bg-accent text-accent-ink',
  muted: 'border-line bg-transparent text-ink-faint',
}

interface BadgeProps {
  children: ReactNode
  tone?: BadgeTone
  className?: string
}

/** Compact pill used for categories, statuses and tags. */
export function Badge({ children, tone = 'neutral', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs leading-none',
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
