import type { TestimonialItem } from '@/types'

interface TestimonialCardProps {
  testimonial: TestimonialItem
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-neutral-border p-7 flex flex-col gap-5 transition-shadow duration-200 hover:shadow-card-md">
      {/* Stars */}
      <div className="flex gap-0.5" aria-label="5 av 5 stjärnor">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-brand-pink" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-neutral-body text-sm leading-relaxed flex-1">
        "{testimonial.quote}"
      </p>

      {/* Attribution */}
      <div className="flex items-center gap-3 pt-2 border-t border-neutral-divider">
        <div className="w-9 h-9 rounded-full bg-brand-pink-tint flex items-center justify-center text-brand-pink font-bold text-sm flex-shrink-0">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-neutral-body text-sm">{testimonial.name}</p>
          <p className="text-xs text-neutral-muted">{testimonial.company}</p>
        </div>
      </div>
    </div>
  )
}
