import type { ReactElement } from 'react'
import { cn } from '../../lib/utils'
import type { ProjectVisual as ProjectVisualKind } from '../../types'

/* Small presentational primitives used to compose lightweight, abstract
   product mock-ups. They intentionally read as wireframes, not as real
   screenshots of any deployed product. */

function Block({ className }: { className?: string }) {
  return <div className={cn('rounded-md bg-surface-muted', className)} />
}

function Bar({ width, accent = false }: { width: string; accent?: boolean }) {
  return (
    <div
      className={cn('h-2 rounded-full', accent ? 'bg-accent/70' : 'bg-line-strong/70')}
      style={{ width }}
    />
  )
}

function Chrome() {
  return (
    <div className="flex items-center gap-1.5 border-b border-line bg-surface-muted/70 px-3 py-2.5">
      <span className="size-2 rounded-full bg-line-strong" />
      <span className="size-2 rounded-full bg-line-strong" />
      <span className="size-2 rounded-full bg-line-strong" />
      <span className="ml-2 h-4 w-24 rounded-full bg-canvas" />
    </div>
  )
}

function Platform() {
  return (
    <div className="flex gap-3">
      <div className="hidden w-1/5 flex-col gap-2 sm:flex">
        <div className="h-6 rounded-md bg-accent-tint" />
        <Block className="h-6" />
        <Block className="h-6" />
        <Block className="h-6" />
      </div>
      <div className="flex-1 space-y-2.5">
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-line p-2">
            <Bar width="60%" />
            <Bar width="40%" accent />
          </div>
          <div className="rounded-lg border border-line p-2">
            <Bar width="70%" />
            <Bar width="50%" />
          </div>
          <div className="rounded-lg border border-line p-2">
            <Bar width="45%" />
            <Bar width="65%" />
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-line p-2.5">
          <Bar width="45%" />
          <span className="relative h-3.5 w-7 rounded-full bg-accent/80">
            <span className="absolute top-0.5 right-0.5 size-2.5 rounded-full bg-white" />
          </span>
        </div>
        <div className="flex items-end gap-1.5 rounded-lg border border-line p-2.5 pt-3">
          {[40, 65, 50, 80, 60, 90, 72].map((h, i) => (
            <span
              key={i}
              className={cn('flex-1 rounded-sm', i === 5 ? 'bg-accent/70' : 'bg-line-strong/60')}
              style={{ height: `${h * 0.32}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function Catering() {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-2">
        <Bar width="34%" accent />
      </div>
      {[0, 1, 2].map((row) => (
        <div
          key={row}
          className="flex items-center justify-between rounded-lg border border-line p-2.5"
        >
          <div className="space-y-1.5">
            <Bar width={row === 0 ? '64px' : row === 1 ? '84px' : '52px'} />
            <Bar width={row === 0 ? '40px' : '58px'} />
          </div>
          <span
            className={cn(
              'relative h-3.5 w-7 rounded-full',
              row === 0 ? 'bg-accent/80' : 'bg-line-strong',
            )}
          >
            <span
              className={cn(
                'absolute top-0.5 size-2.5 rounded-full bg-white',
                row === 0 ? 'right-0.5' : 'left-0.5',
              )}
            />
          </span>
        </div>
      ))}
    </div>
  )
}

function Recruitment() {
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {[0, 1, 2].map((col) => (
        <div key={col} className="space-y-2">
          <div className={cn('h-2 rounded-full', col === 1 ? 'w-2/3 bg-accent/70' : 'w-1/2 bg-line-strong/70')} />
          {Array.from({ length: col === 2 ? 2 : 3 }).map((_, row) => (
            <div
              key={row}
              className={cn(
                'space-y-1.5 rounded-lg border p-2',
                col === 1 && row === 0 ? 'border-accent/30 bg-accent-tint' : 'border-line',
              )}
            >
              <Bar width="70%" />
              <Bar width="45%" />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function Gym() {
  return (
    <div className="space-y-2.5">
      <div className="grid grid-cols-2 gap-2">
        {[0, 1, 2, 3].map((tile) => (
          <div
            key={tile}
            className={cn(
              'rounded-lg border p-2.5',
              tile === 0 ? 'border-accent/30 bg-accent-tint' : 'border-line',
            )}
          >
            <Bar width="55%" />
            <Bar width="35%" accent={tile === 0} />
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1.5 rounded-lg border border-line p-2.5 pt-3">
        {[35, 55, 45, 70, 85, 60].map((h, i) => (
          <span
            key={i}
            className={cn('flex-1 rounded-sm', i === 4 ? 'bg-accent/55' : 'bg-line-strong/60')}
            style={{ height: `${h * 0.3}px` }}
          />
        ))}
      </div>
    </div>
  )
}

function Restaurant() {
  return (
    <div className="space-y-2">
      {[
        { status: 'accent', width: '58%' },
        { status: 'soft', width: '44%' },
        { status: 'line', width: '66%' },
        { status: 'line', width: '38%' },
      ].map((row, i) => (
        <div
          key={i}
          className="flex items-center justify-between rounded-lg border border-line px-2.5 py-2"
        >
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-line-strong" />
            <Bar width={row.width} />
          </div>
          <span
            className={cn(
              'h-3.5 w-12 rounded-full',
              row.status === 'accent'
                ? 'bg-accent/70'
                : row.status === 'soft'
                  ? 'bg-accent/25'
                  : 'bg-surface-muted',
            )}
          />
        </div>
      ))}
    </div>
  )
}

const BODIES: Record<ProjectVisualKind, () => ReactElement> = {
  platform: Platform,
  catering: Catering,
  recruitment: Recruitment,
  gym: Gym,
  restaurant: Restaurant,
  generic: Platform,
}

interface ProjectMockProps {
  variant: ProjectVisualKind
  className?: string
}

/**
 * Conceptual product illustration per project. Code-drawn, deliberately
 * abstract and labelled "Conceptual" so it is never mistaken for a real
 * screenshot.
 */
export function ProjectMock({ variant, className }: ProjectMockProps) {
  const Body = BODIES[variant]

  return (
    <div
      className={cn(
        'relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-surface',
        className,
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dots opacity-40" />
      <div className="relative">
        <Chrome />
        <div className="p-3.5">
          <Body />
        </div>
      </div>

      <span className="absolute right-2.5 bottom-2.5 rounded-full border border-line bg-surface/90 px-2 py-0.5 font-mono text-[0.55rem] tracking-[0.14em] text-ink-faint uppercase">
        Conceptual
      </span>
    </div>
  )
}
