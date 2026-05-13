import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-page grid min-h-[70vh] place-items-center py-16 text-center">
      <div>
        <p className="text-7xl">🌾</p>
        <h1 className="mt-6 text-4xl font-black text-noche">Página no encontrada</h1>
        <p className="mt-3 text-slate-600">La ruta que buscas no existe en RappiCampo.</p>
        <Link to="/" className="btn-primary mt-6">Volver al inicio</Link>
      </div>
    </section>
  )
}
