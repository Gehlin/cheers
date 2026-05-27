interface ShowcaseImage {
  src: string
  alt: string
  caption?: string
}

interface ShowcaseStripProps {
  images: ShowcaseImage[]
}

export default function ShowcaseStrip({ images }: ShowcaseStripProps) {
  return (
    <section className="bg-brand-dark" aria-label="Utvalda projekt">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {images.map(({ src, alt, caption }, i) => (
          <div key={i} className="relative aspect-[4/3] overflow-hidden group">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-90"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            {/* Hover overlay */}
            {caption && (
              <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                <p className="text-white text-sm font-semibold">{caption}</p>
              </div>
            )}
            {/* Subtle vertical divider between cells */}
            {i < images.length - 1 && (
              <span className="absolute right-0 top-0 bottom-0 w-px bg-white/5 hidden sm:block" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
