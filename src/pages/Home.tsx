import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>No1 Ställningar – Göteborg</title>
      </Helmet>
      <div className="section-padding container-max">
        <h1 className="text-4xl font-bold text-neutral-body">Hem</h1>
        <p className="text-neutral-muted mt-4">Välkommen till No1 Ställningar.</p>
      </div>
    </>
  )
}
