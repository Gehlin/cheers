import { Helmet } from 'react-helmet-async'

export default function OmOss() {
  return (
    <>
      <Helmet>
        <title>Om oss | No1 Ställningar</title>
      </Helmet>
      <div className="section-padding container-max">
        <h1 className="text-4xl font-bold text-neutral-body">Om oss</h1>
        <p className="text-neutral-muted mt-4">Information om företaget visas här.</p>
      </div>
    </>
  )
}
