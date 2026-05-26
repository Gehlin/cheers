import { Helmet } from 'react-helmet-async'

export default function BegarOffert() {
  return (
    <>
      <Helmet>
        <title>Begär offert | No1 Ställningar</title>
      </Helmet>
      <div className="section-padding container-max">
        <h1 className="text-4xl font-bold text-neutral-body">Begär offert</h1>
        <p className="text-neutral-muted mt-4">Offertformuläret visas här.</p>
      </div>
    </>
  )
}
