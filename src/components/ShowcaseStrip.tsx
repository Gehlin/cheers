interface ShowcaseImage {
  src: string
  alt: string
  caption?: string
}

interface ShowcaseStripProps {
  images: ShowcaseImage[]
  headline?: string
}

export default function ShowcaseStrip({ images, headline }: ShowcaseStripProps) {
  return (
    <section className="bg-black">
      {headline && (
        <div className="text-center py-8 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{headline}</h2>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {images.map(({ src, alt, caption }) => (
          <div key={src} className="relative aspect-[4/3] overflow-hidden group">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
