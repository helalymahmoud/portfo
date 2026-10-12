import { Download } from 'lucide-react'
import { useId } from 'react'
import { profile } from '../../data/profile'
import { useAssetAvailability } from '../../hooks/useAssetAvailability'
import type { ButtonSize, ButtonVariant } from '../../lib/button'
import { Button, ButtonLink } from './Button'

interface CvDownloadButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  label?: string
  /**
   * `hidden` keeps the availability message for screen readers only
   * (used in the navigation); `inline` renders it visibly.
   */
  statusPlacement?: 'hidden' | 'inline'
}

/**
 * Download action for the CV PDF.
 *
 * The file is checked at runtime: when it exists the control is a real
 * download link, and when it does not the control degrades to a
 * disabled button with an honest message. This keeps the site truthful
 * until the owner drops the real PDF into `public/cv/`.
 */
export function CvDownloadButton({
  variant = 'secondary',
  size = 'md',
  className,
  label = 'Download CV',
  statusPlacement = 'hidden',
}: CvDownloadButtonProps) {
  const status = useAssetAvailability(profile.cv.path)
  const messageId = useId()

  if (status === 'available') {
    return (
      <ButtonLink
        href={profile.cv.path}
        download={profile.cv.fileName}
        variant={variant}
        size={size}
        className={className}
      >
        <Download className="size-4" aria-hidden="true" />
        {label}
      </ButtonLink>
    )
  }

  const statusText =
    status === 'checking' ? 'Checking CV availability…' : 'CV file will be added soon.'

  return (
    <span className="inline-flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <Button
        disabled
        aria-disabled="true"
        aria-busy={status === 'checking'}
        aria-describedby={messageId}
        variant={variant}
        size={size}
        className={className}
      >
        <Download className="size-4" aria-hidden="true" />
        {label}
      </Button>
      <span
        id={messageId}
        className={statusPlacement === 'inline' ? 'text-xs text-ink-faint' : 'sr-only'}
      >
        {statusText}
      </span>
    </span>
  )
}
