import React from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size    = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  disabled?: boolean
  loading?: boolean
  className?: string
  children: React.ReactNode
}

interface ButtonAsButton extends BaseProps {
  as?: 'button'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  href?: never
  type?: 'button' | 'submit' | 'reset'
}

interface ButtonAsAnchor extends BaseProps {
  as: 'a'
  href: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  type?: never
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-pink text-white hover:bg-brand-pink-dark shadow-[0_1px_2px_rgb(236_0_140/0.3)] hover:shadow-[0_2px_8px_rgb(236_0_140/0.35)] focus-visible:ring-brand-pink',
  secondary:
    'bg-white text-brand-pink border border-neutral-border hover:border-brand-pink hover:bg-brand-pink-tint focus-visible:ring-brand-pink',
  outline:
    'border border-brand-pink text-brand-pink bg-transparent hover:bg-brand-pink hover:text-white focus-visible:ring-brand-pink',
  ghost:
    'bg-transparent text-neutral-muted hover:text-neutral-body hover:bg-neutral-bg focus-visible:ring-neutral-border',
}

const sizeClasses: Record<Size, string> = {
  sm:  'px-3.5 py-2 text-xs gap-1.5',
  md:  'px-5 py-2.5 text-sm gap-2',
  lg:  'px-7 py-3.5 text-base gap-2',
}

const Spinner = () => (
  <svg
    className="animate-spin h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>
)

export default function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    className = '',
    children,
  } = props

  const base =
    'inline-flex items-center justify-center rounded-lg font-semibold tracking-tight transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none'

  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (props.as === 'a') {
    return (
      <a href={props.href} onClick={props.onClick} className={classes}>
        {loading && <Spinner />}
        {children}
      </a>
    )
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={disabled || loading}
      className={classes}
    >
      {loading && <Spinner />}
      {children}
    </button>
  )
}
