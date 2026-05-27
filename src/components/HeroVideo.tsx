interface HeroVideoProps {
  videoSrc?: string       // e.g. '/videos/drone-showcase.mp4'
  posterSrc?: string      // fallback image shown before video loads
  imageSrc?: string       // used instead of video if no videoSrc provided
  headline: string
  subheadline: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export default function HeroVideo({
  videoSrc,
  posterSrc,
  imageSrc,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: HeroVideoProps) {
  return (
    <section
      aria-label="Hjältebanner"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={
        !videoSrc && !imageSrc
          ? {
              backgroundImage:
                'repeating-linear-gradient(135deg, #1B2A4A, #1B2A4A 40px, #1a2948 40px, #1a2948 80px)',
            }
          : undefined
      }
    >
      {/* Background: video or image */}
      {videoSrc ? (
        <video
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : imageSrc ? (
        <img
          src={imageSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : null}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              {headline}
            </h1>
            <p className="text-xl sm:text-2xl text-white/85 mt-6 max-w-2xl mx-auto leading-relaxed">
              {subheadline}
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-10">
              <a
                href={primaryCta.href}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold text-base bg-brand-pink text-white hover:bg-brand-pink-dark transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2"
              >
                {primaryCta.label}
              </a>
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold text-base border-2 border-white text-white bg-transparent hover:bg-white hover:text-neutral-body transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce" aria-hidden="true">
        <svg
          className="w-8 h-8 text-white/70"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
