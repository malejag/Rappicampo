import { useState } from 'react'
import DashboardCard from '../components/DashboardCard.jsx'
import { demoOrders } from '../data/mockData.js'
import { formatCOP } from '../utils/format.js'

const states = ['Recogido', 'En camino', 'Entregado']

export default function DeliveryDashboard() {
  const [deliveryStates, setDeliveryStates] = useState({})

  const nextState = (orderId) => {
    setDeliveryStates((current) => {
      const currentState = current[orderId] || 'Recogido'
      const index = states.indexOf(currentState)
      return { ...current, [orderId]: states[Math.min(index + 1, states.length - 1)] }
    })
  }

  return (
    <div>
      <div className="mb-8">
        <span className="badge bg-campo-100 text-campo-800">🛵 Panel Repartidor</span>
        <h1 className="mt-4 text-3xl font-black text-noche">Entregas asignadas</h1>
        <p className="mt-2 text-slate-600">Consulta ruta, zona rural y cambia el estado de cada entrega.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <DashboardCard icon="📦" label="Entregas asignadas" value="3" trend="Hoy" />
        <DashboardCard icon="📍" label="Zona principal" value="Venecia" trend="Rural" />
        <DashboardCard icon="✅" label="Entregas finalizadas" value="8" trend="Semana" />
      </div>

      <section className="mt-8 grid gap-5">
        {demoOrders.map((order) => {
          const status = deliveryStates[order.id] || 'Recogido'
          return (
            <div key={order.id} className="card-soft grid gap-5 p-6 lg:grid-cols-[1fr_0.5fr_0.4fr] lg:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-black text-noche">{order.id}</h2>
                  <span className="badge bg-campo-100 text-campo-800">{status}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">Cliente: {order.customer}</p>
                <p className="mt-1 text-sm text-slate-600">Ruta o zona: {order.zone}</p>
                <p className="mt-1 text-sm text-slate-600">Tienda: {order.store}</p>
              </div>
              <div className="rounded-3xl bg-campo-50 p-4">
                <p className="text-sm font-bold text-slate-500">Total pedido</p>
                <p className="mt-1 text-xl font-black text-campo-800">{formatCOP(order.total)}</p>
              </div>
              <button onClick={() => nextState(order.id)} className="btn-primary">
                Cambiar estado
              </button>
            </div>
          )
        })}
      </section>
    </div>
  )
}
