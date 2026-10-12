import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { Eyebrow } from './Eyebrow'

interface SectionHeadingProps {
  /** Applied to the <h2> so the section can reference it via aria-labelledby. */
  id?: string
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  className?: string
  align?: 'left' | 'center'
}

/** Consistent heading block used at the top of each section. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  className,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <Eyebrow className={cn('mb-4', align === 'center' && 'justify-center')}>{eyebrow}</Eyebrow>
      ) : null}
      <h2 id={id} className="text-3xl font-semibold text-ink sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
