import { Helmet } from 'react-helmet-async'

export default function Kontakt() {
  return (
    <>
      <Helmet>
        <title>Kontakt | No1 Ställningar</title>
      </Helmet>
      <div className="section-padding container-max">
        <h1 className="text-4xl font-bold text-neutral-body">Kontakt</h1>
        <p className="text-neutral-muted mt-4">Kontaktuppgifter visas här.</p>
      </div>
    </>
  )
}
