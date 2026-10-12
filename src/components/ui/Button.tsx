import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { buttonStyles, type ButtonSize, type ButtonVariant } from '../../lib/button'

interface CommonButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & CommonButtonProps

/** Semantic button element styled with the shared button system. */
export function Button({ variant, size, className, type = 'button', ...rest }: ButtonProps) {
  return <button type={type} className={buttonStyles(variant, size, className)} {...rest} />
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & CommonButtonProps

/** Anchor styled as a button - used for CTAs that navigate or download. */
export function ButtonLink({ variant, size, className, ...rest }: ButtonLinkProps) {
  return <a className={buttonStyles(variant, size, className)} {...rest} />
}
