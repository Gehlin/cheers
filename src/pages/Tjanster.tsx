import { Helmet } from 'react-helmet-async'

export default function Tjanster() {
  return (
    <>
      <Helmet>
        <title>Tjänster | No1 Ställningar</title>
      </Helmet>
      <div className="section-padding container-max">
        <h1 className="text-4xl font-bold text-neutral-body">Tjänster</h1>
        <p className="text-neutral-muted mt-4">Våra tjänster presenteras här.</p>
      </div>
    </>
  )
}
