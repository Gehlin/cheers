interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 mb-10 ${alignClass}`}>
      <h2 className="text-3xl font-bold text-neutral-body">{title}</h2>
      <span className="block w-12 h-1 rounded bg-brand-pink" aria-hidden="true" />
      {subtitle && <p className="text-neutral-muted text-lg max-w-2xl">{subtitle}</p>}
    </div>
  )
}
