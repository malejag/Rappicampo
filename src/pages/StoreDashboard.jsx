import { useState } from 'react'
import DashboardCard from '../components/DashboardCard.jsx'
import { demoOrders, products } from '../data/mockData.js'
import { formatCOP } from '../utils/format.js'

export default function StoreDashboard() {
  const [storeProducts, setStoreProducts] = useState(products.slice(0, 7))
  const [newProduct, setNewProduct] = useState({ name: '', price: '', categoryLabel: 'Mercado' })

  const createProduct = (event) => {
    event.preventDefault()
    if (!newProduct.name || !newProduct.price) return
    setStoreProducts((current) => [
      { id: `demo-${Date.now()}`, image: '🧺', stock: 10, available: true, store: 'Mi Tienda Rural', location: 'Florencia, Caquetá', ...newProduct, price: Number(newProduct.price) },
      ...current
    ])
    setNewProduct({ name: '', price: '', categoryLabel: 'Mercado' })
  }

  const removeProduct = (id) => setStoreProducts((current) => current.filter((item) => item.id !== id))

  return (
    <div>
      <div className="mb-8">
        <span className="badge bg-campo-100 text-campo-800">🏪 Panel Tienda/Supermercado</span>
        <h1 className="mt-4 text-3xl font-black text-noche">Gestión de productos y pedidos</h1>
        <p className="mt-2 text-slate-600">Crea productos simulados, actualiza disponibilidad y revisa pedidos recibidos.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <DashboardCard icon="🧺" label="Productos publicados" value={String(storeProducts.length)} trend="Activos" />
        <DashboardCard icon="📦" label="Pedidos recibidos" value="12" trend="Hoy" />
        <DashboardCard icon="✅" label="Disponibilidad" value="92%" trend="Alta" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <form onSubmit={createProduct} className="card-soft h-fit space-y-4 p-6">
          <h2 className="text-xl font-black text-noche">Crear producto simulado</h2>
          <input className="input-soft" value={newProduct.name} onChange={(event) => setNewProduct({ ...newProduct, name: event.target.value })} placeholder="Nombre del producto" />
          <input className="input-soft" type="number" value={newProduct.price} onChange={(event) => setNewProduct({ ...newProduct, price: event.target.value })} placeholder="Precio en COP" />
          <select className="input-soft" value={newProduct.categoryLabel} onChange={(event) => setNewProduct({ ...newProduct, categoryLabel: event.target.value })}>
            <option>Mercado</option>
            <option>Veterinaria</option>
            <option>Concentrados</option>
            <option>Herramientas</option>
            <option>Fertilizantes</option>
          </select>
          <button className="btn-primary w-full">Crear producto</button>
        </form>

        <section className="card-soft overflow-hidden">
          <div className="border-b border-slate-100 p-6">
            <h2 className="text-xl font-black text-noche">Tabla de productos</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-campo-50 text-campo-900">
                <tr>
                  <th className="px-5 py-4">Producto</th>
                  <th className="px-5 py-4">Categoría</th>
                  <th className="px-5 py-4">Precio</th>
                  <th className="px-5 py-4">Disponibilidad</th>
                  <th className="px-5 py-4">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {storeProducts.map((product) => (
                  <tr key={product.id} className="border-t border-slate-100">
                    <td className="px-5 py-4 font-bold text-noche">{product.image} {product.name}</td>
                    <td className="px-5 py-4">{product.categoryLabel}</td>
                    <td className="px-5 py-4 font-bold">{formatCOP(product.price)}</td>
                    <td className="px-5 py-4"><span className="badge bg-emerald-50 text-emerald-700">Disponible</span></td>
                    <td className="px-5 py-4">
                      <button className="mr-2 rounded-xl bg-maiz/25 px-3 py-2 font-bold text-noche">Editar</button>
                      <button onClick={() => removeProduct(product.id)} className="rounded-xl bg-red-50 px-3 py-2 font-bold text-red-600">Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <section className="card-soft mt-8 p-6">
        <h2 className="text-xl font-black text-noche">Pedidos recibidos</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {demoOrders.map((order) => (
            <div key={order.id} className="rounded-3xl bg-slate-50 p-4">
              <p className="font-black text-noche">{order.id}</p>
              <p className="mt-1 text-sm text-slate-600">{order.customer}</p>
              <p className="mt-2 text-sm font-bold text-campo-800">{order.status}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
