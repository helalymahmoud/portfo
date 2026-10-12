import { cn } from './utils'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'inverse'
export type ButtonSize = 'md' | 'lg'

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-200 disabled:cursor-not-allowed disabled:opacity-55'

const SIZES: Record<ButtonSize, string> = {
  md: 'h-10 px-5 text-sm',
  lg: 'h-12 px-6 text-[0.95rem]',
}

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-accent-ink shadow-accent hover:bg-accent-strong active:translate-y-px',
  secondary:
    'border border-line-strong bg-surface text-ink hover:border-accent hover:text-accent active:translate-y-px',
  ghost: 'text-ink-muted hover:bg-surface-muted hover:text-ink',
  inverse: 'bg-surface text-accent hover:bg-accent-tint active:translate-y-px',
}

/** Compose the class string for a button-styled element. */
export function buttonStyles(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  className?: string,
): string {
  return cn(BASE, SIZES[size], VARIANTS[variant], className)
}
