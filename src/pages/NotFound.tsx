import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Sidan hittades inte | No1 Ställningar</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="bg-white section-pad-lg flex flex-col items-center justify-center text-center min-h-[70vh]">
        {/* Large 404 */}
        <p
          className="font-black text-[10rem] sm:text-[14rem] leading-none select-none mb-0"
          style={{ color: '#EC008C', opacity: 0.1 }}
          aria-hidden="true"
        >
          404
        </p>

        {/* Content — pulled up over the large number */}
        <div className="-mt-10 sm:-mt-16 relative z-10">
          <div className="w-12 h-12 rounded-xl bg-brand-pink-tint flex items-center justify-center mx-auto mb-6 text-brand-pink">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-body mb-3">
            Sidan hittades inte
          </h1>
          <p className="text-neutral-muted text-base mb-8 max-w-sm mx-auto leading-relaxed">
            Sidan du letar efter finns inte eller har flyttats. Gå tillbaka till startsidan.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-pink text-white font-semibold text-sm hover:bg-brand-pink-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V20.25A.75.75 0 0120.25 21H15v-6H9v6H3.75A.75.75 0 013 20.25V9.75z" />
              </svg>
              Gå till startsidan
            </Link>
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-neutral-border text-neutral-body font-semibold text-sm hover:border-brand-pink hover:text-brand-pink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
