import type { ServiceItem } from '@/types'
import Icon from './Icon'

interface ServiceCardProps {
  service: ServiceItem
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 hover:-translate-y-1 transition-transform duration-200 flex flex-col gap-4">
      <div className="w-12 h-12 rounded-lg bg-brand-pink/10 flex items-center justify-center text-brand-pink">
        <Icon name={service.icon as Parameters<typeof Icon>[0]['name']} className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-neutral-body mb-2">{service.title}</h3>
        <p className="text-neutral-muted text-sm leading-relaxed">{service.description}</p>
      </div>
    </div>
  )
}
