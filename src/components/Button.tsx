import React from 'react'

type Variant = 'primary' | 'secondary' | 'outline'

interface BaseProps {
  variant?: Variant
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
    'bg-brand-pink text-white hover:bg-brand-pink-dark focus-visible:ring-brand-pink',
  secondary:
    'bg-white text-brand-pink hover:bg-gray-50 focus-visible:ring-brand-pink',
  outline:
    'border-2 border-brand-pink text-brand-pink bg-transparent hover:bg-brand-pink hover:text-white focus-visible:ring-brand-pink',
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
  const { variant = 'primary', disabled = false, loading = false, className = '', children } = props

  const base =
    'inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const classes = `${base} ${variantClasses[variant]} ${className}`

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
