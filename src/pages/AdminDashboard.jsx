import DashboardCard from '../components/DashboardCard.jsx'
import { adminStats, demoOrders, products, roles } from '../data/mockData.js'
import { formatCOP } from '../utils/format.js'

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <span className="badge bg-campo-100 text-campo-800">🧑‍💻 Panel Administrador</span>
        <h1 className="mt-4 text-3xl font-black text-noche">Dashboard general RappiCampo</h1>
        <p className="mt-2 text-slate-600">Estadísticas y gestión visual de usuarios, tiendas, productos y pedidos.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {adminStats.map((stat) => <DashboardCard key={stat.label} {...stat} />)}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <section className="card-soft overflow-hidden">
          <div className="border-b border-slate-100 p-6">
            <h2 className="text-xl font-black text-noche">Gestión de usuarios</h2>
          </div>
          <div className="grid gap-3 p-6 sm:grid-cols-2">
            {roles.map((role) => (
              <div key={role.id} className="rounded-3xl bg-slate-50 p-4">
                <p className="text-3xl">{role.icon}</p>
                <h3 className="mt-2 font-black text-noche">{role.label}</h3>
                <p className="mt-1 text-sm text-slate-600">{role.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card-soft overflow-hidden">
          <div className="border-b border-slate-100 p-6">
            <h2 className="text-xl font-black text-noche">Gestión de pedidos</h2>
          </div>
          <div className="space-y-3 p-6">
            {demoOrders.map((order) => (
              <div key={order.id} className="rounded-3xl bg-slate-50 p-4">
                <div className="flex justify-between gap-4">
                  <strong className="text-noche">{order.id}</strong>
                  <span className="badge bg-campo-100 text-campo-800">{order.status}</span>
                </div>
                <p className="mt-1 text-sm text-slate-600">{order.customer} · {order.zone}</p>
                <p className="mt-2 font-black text-campo-800">{formatCOP(order.total)}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="card-soft mt-8 overflow-hidden">
        <div className="border-b border-slate-100 p-6">
          <h2 className="text-xl font-black text-noche">Gestión de productos</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-campo-50 text-campo-900">
              <tr>
                <th className="px-5 py-4">Producto</th>
                <th className="px-5 py-4">Categoría</th>
                <th className="px-5 py-4">Tienda</th>
                <th className="px-5 py-4">Precio</th>
                <th className="px-5 py-4">Estado</th>
              </tr>
            </thead>
            <tbody>
              {products.slice(0, 8).map((product) => (
                <tr key={product.id} className="border-t border-slate-100">
                  <td className="px-5 py-4 font-bold text-noche">{product.image} {product.name}</td>
                  <td className="px-5 py-4">{product.categoryLabel}</td>
                  <td className="px-5 py-4">{product.store}</td>
                  <td className="px-5 py-4 font-bold">{formatCOP(product.price)}</td>
                  <td className="px-5 py-4"><span className="badge bg-emerald-50 text-emerald-700">Disponible</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
