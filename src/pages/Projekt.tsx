import { Helmet } from 'react-helmet-async'

export default function Projekt() {
  return (
    <>
      <Helmet>
        <title>Projekt | No1 Ställningar</title>
      </Helmet>
      <div className="section-padding container-max">
        <h1 className="text-4xl font-bold text-neutral-body">Projekt</h1>
        <p className="text-neutral-muted mt-4">Referensprojekt visas här.</p>
      </div>
    </>
  )
}
