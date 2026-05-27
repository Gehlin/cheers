import type { TestimonialItem } from '@/types'

interface TestimonialCardProps {
  testimonial: TestimonialItem
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 flex flex-col gap-4">
      <span className="text-5xl font-serif leading-none text-brand-pink select-none" aria-hidden="true">"</span>
      <p className="text-neutral-body leading-relaxed flex-1 -mt-4">"{testimonial.quote}"</p>
      <div>
        <p className="font-semibold text-neutral-body">{testimonial.name}</p>
        <p className="text-sm text-neutral-muted">{testimonial.company}</p>
      </div>
    </div>
  )
}
