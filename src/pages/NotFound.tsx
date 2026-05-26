import { Helmet } from 'react-helmet-async'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Sidan hittades inte | No1 Ställningar</title>
      </Helmet>
      <div className="section-padding flex flex-col items-center justify-center text-center min-h-[60vh]">
        <p className="text-8xl font-bold text-brand-amber mb-4">404</p>
        <h1 className="text-3xl font-bold text-neutral-body mb-4">
          404 – Sidan hittades inte
        </h1>
        <p className="text-neutral-muted mb-8 max-w-md">
          Sidan du letar efter finns inte eller har flyttats.
        </p>
        <Button as="a" href="/" variant="primary">
          Gå till startsidan
        </Button>
      </div>
    </>
  )
}
