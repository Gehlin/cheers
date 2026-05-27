interface HeroVideoProps {
  videoSrc?: string       // e.g. '/videos/drone-showcase.mp4'
  posterSrc?: string      // fallback poster image before video loads
  imageSrc?: string       // static bg image when no video is available
  headline: string
  headlineAccent?: string // word(s) to render in pink — appended after headline
  subheadline: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export default function HeroVideo({
  videoSrc,
  posterSrc,
  imageSrc,
  headline,
  headlineAccent,
  subheadline,
  primaryCta,
  secondaryCta,
}: HeroVideoProps) {
  const hasMedia = !!(videoSrc || imageSrc)

  return (
    <section
      aria-label="Hjältebanner"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-brand-dark"
    >
      {/* ── Background media ────────────────────────────────────────────── */}
      {videoSrc ? (
        <video
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : imageSrc ? (
        <img
          src={imageSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
      ) : (
        /* No media — atmospheric placeholder */
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 60% at 70% 50%, rgba(236,0,140,0.08) 0%, transparent 70%),
              repeating-linear-gradient(
                135deg,
                transparent,
                transparent 60px,
                rgba(255,255,255,0.015) 60px,
                rgba(255,255,255,0.015) 61px
              )
            `,
          }}
        >
          {/* Placeholder image guide */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center border-l border-white/5">
            <div className="text-center p-8">
              <div className="w-32 h-32 rounded-2xl border-2 border-dashed border-white/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-white/20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M2.25 19.5h19.5M3.75 6.75h16.5" />
                </svg>
              </div>
              <p className="text-white/20 text-xs font-medium">Hero-bild / drone-video</p>
              <p className="text-white/10 text-xs mt-1">1920 × 1080 px rekommenderas</p>
            </div>
          </div>
        </div>
      )}

      {/* ── Gradient overlay ─────────────────────────────────────────────── */}
      {hasMedia && (
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(105deg, #141416 0%, rgba(20,20,22,0.82) 50%, rgba(20,20,22,0.3) 100%)',
          }}
        />
      )}

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full section-padding">
        <div className="container-max">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-pink mb-6" style={{ animation: 'fadeInUp 0.5s ease both' }}>
              No 1 Scaffolding Company AB · Göteborg
            </p>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.02] tracking-[-0.03em] text-white mb-6"
              style={{ animation: 'fadeInUp 0.6s 0.1s ease both' }}
            >
              {headline}
              {headlineAccent && (
                <> <span className="text-brand-pink">{headlineAccent}</span></>
              )}
            </h1>

            {/* Sub */}
            <p
              className="text-lg text-white/65 leading-relaxed mb-10 max-w-lg"
              style={{ animation: 'fadeInUp 0.6s 0.2s ease both' }}
            >
              {subheadline}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3"
              style={{ animation: 'fadeInUp 0.6s 0.3s ease both' }}
            >
              <a
                href={primaryCta.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-brand-pink text-white font-semibold text-sm hover:bg-brand-pink-dark transition-all duration-150 shadow-[0_2px_12px_rgb(236_0_140/0.35)] hover:shadow-[0_4px_20px_rgb(236_0_140/0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
              >
                {primaryCta.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/25 text-white/80 font-semibold text-sm hover:border-white/50 hover:text-white hover:bg-white/5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce" aria-hidden="true">
        <svg className="w-6 h-6 text-white/30" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
