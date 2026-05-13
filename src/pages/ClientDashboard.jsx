import { Link } from 'react-router-dom'
import DashboardCard from '../components/DashboardCard.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { demoOrders, products } from '../data/mockData.js'
import { formatCOP } from '../utils/format.js'

export default function ClientDashboard() {
  const recommendations = products.filter((product) => ['concentrados', 'mercado', 'fertilizantes'].includes(product.category)).slice(0, 3)

  return (
    <div>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="badge bg-campo-100 text-campo-800">👨‍🌾 Panel Cliente Rural</span>
          <h1 className="mt-4 text-3xl font-black text-noche">Bienvenido a tu compra rural</h1>
          <p className="mt-2 text-slate-600">Accede rápido a productos, pedidos recientes y recomendaciones inteligentes.</p>
        </div>
        <Link to="/productos" className="btn-primary">Ver productos</Link>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <DashboardCard icon="🛒" label="Pedidos recientes" value="3" trend="Este mes" />
        <DashboardCard icon="📦" label="Entrega actual" value="En camino" trend="Activa" />
        <DashboardCard icon="🤖" label="Recomendaciones IA" value="8" trend="Nuevas" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <section className="card-soft p-6">
          <h2 className="text-xl font-black text-noche">Pedidos recientes</h2>
          <div className="mt-4 space-y-3">
            {demoOrders.slice(0, 2).map((order) => (
              <div key={order.id} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex justify-between gap-4">
                  <strong className="text-noche">{order.id}</strong>
                  <span className="badge bg-campo-100 text-campo-800">{order.status}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{order.store} · {order.zone}</p>
                <p className="mt-2 font-black text-campo-800">{formatCOP(order.total)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card-soft p-6">
          <h2 className="text-xl font-black text-noche">Estado de entrega</h2>
          <div className="mt-5 rounded-3xl bg-campo-50 p-5">
            <p className="text-4xl">🛵</p>
            <h3 className="mt-3 text-lg font-black text-noche">Tu pedido va hacia Vereda Venecia</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Repartidor asignado: Carlos Ríos. Tiempo estimado: 45 minutos.</p>
            <Link to="/seguimiento" className="btn-secondary mt-4 w-full">Ver seguimiento</Link>
          </div>
        </section>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-black text-noche">Recomendaciones inteligentes</h2>
        <div className="mt-5 grid gap-6 md:grid-cols-3">
          {recommendations.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </div>
  )
}
