import { Link } from 'react-router-dom'
import OrderTimeline from '../components/OrderTimeline.jsx'

export default function OrderTracking() {
  const lastOrder = JSON.parse(localStorage.getItem('rappicampo_last_order') || 'null')

  return (
    <section className="container-page py-10">
      <div className="mb-8">
        <span className="badge bg-campo-100 text-campo-800">📦 Seguimiento de pedido</span>
        <h1 className="mt-4 text-3xl font-black text-noche">Tu entrega rural va en camino</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <div className="card-soft p-6">
          <OrderTimeline current="camino" />
        </div>
        <aside className="space-y-6">
          <div className="card-soft p-6">
            <h2 className="text-xl font-black text-noche">Información del pedido</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p><strong className="text-noche">Pedido:</strong> {lastOrder?.id || 'ORD-1001'}</p>
              <p><strong className="text-noche">Destino:</strong> {lastOrder?.address || 'Vereda Venecia, Florencia, Caquetá'}</p>
              <p><strong className="text-noche">Estado:</strong> En camino</p>
            </div>
          </div>
          <div className="card-soft p-6">
            <h2 className="text-xl font-black text-noche">Repartidor asignado</h2>
            <div className="mt-4 flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-maiz/25 text-3xl">🛵</span>
              <div>
                <p className="font-black text-noche">Carlos Ríos</p>
                <p className="text-sm text-slate-500">Ruta Vereda Venecia</p>
              </div>
            </div>
            <Link to="/chat" className="btn-warning mt-6 w-full">Contactar por chat</Link>
          </div>
        </aside>
      </div>
    </section>
  )
}
