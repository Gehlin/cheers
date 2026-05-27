import type { ServiceItem } from '@/types'
import Icon from './Icon'

interface ServiceCardProps {
  service: ServiceItem
  size?: 'default' | 'lg'
}

export default function ServiceCard({ service, size = 'default' }: ServiceCardProps) {
  const isLg = size === 'lg'

  return (
    <div className={`
      group relative bg-white rounded-2xl border border-neutral-border
      transition-all duration-200 hover:shadow-card-md hover:-translate-y-0.5
      flex flex-col gap-4 overflow-hidden
      ${isLg ? 'p-8' : 'p-6'}
    `}>
      {/* Pink left-border accent — appears on hover */}
      <span
        className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-brand-pink opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        aria-hidden="true"
      />

      {/* Icon */}
      <div className={`
        rounded-xl bg-brand-pink-tint flex items-center justify-center text-brand-pink
        ${isLg ? 'w-14 h-14' : 'w-12 h-12'}
      `}>
        <Icon name={service.icon as Parameters<typeof Icon>[0]['name']} className={isLg ? 'w-7 h-7' : 'w-6 h-6'} />
      </div>

      <div>
        <h3 className={`font-bold text-neutral-body mb-2 tracking-tight ${isLg ? 'text-xl' : 'text-base'}`}>
          {service.title}
        </h3>
        <p className="text-neutral-muted text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  )
}
