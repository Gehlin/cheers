interface SectionHeadingProps {
  eyebrow?: string           // small-caps label above heading
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  size?: 'default' | 'lg'
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  size = 'default',
}: SectionHeadingProps) {
  const isCenter = align === 'center'
  const alignClass = isCenter ? 'text-center items-center' : 'text-left items-start'

  const h2Class =
    size === 'lg'
      ? 'text-4xl sm:text-5xl font-black tracking-tight text-neutral-body'
      : 'text-3xl sm:text-4xl font-black tracking-tight text-neutral-body'

  return (
    <div className={`flex flex-col gap-3 mb-12 ${alignClass}`}>
      {eyebrow && (
        <span className="eyebrow">{eyebrow}</span>
      )}
      <h2 className={`${h2Class} text-balance`}>{title}</h2>
      {/* Pink accent bar */}
      <span className="block w-10 h-[3px] rounded-full bg-brand-pink" aria-hidden="true" />
      {subtitle && (
        <p className={`text-neutral-muted text-lg leading-relaxed ${isCenter ? 'max-w-2xl' : 'max-w-xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
