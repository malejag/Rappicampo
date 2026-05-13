import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { createOrder } from '../services/api.js'
import { formatCOP } from '../utils/format.js'

export default function Checkout() {
  const { items, subtotal, shipping, total, clearCart } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ address: 'Vereda Venecia, Florencia, Caquetá', phone: '', payment: 'Contra entrega', notes: '' })
  const [loading, setLoading] = useState(false)

  const update = (field, value) => setForm((current) => ({ ...current, [field]: value }))

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    await createOrder({ customer: user?.name, items, subtotal, shipping, total, ...form })
    clearCart()
    navigate('/pedido-exitoso')
  }

  if (!items.length) {
    return (
      <section className="container-page py-16 text-center">
        <p className="text-6xl">🧺</p>
        <h1 className="mt-4 text-3xl font-black text-noche">No tienes productos para confirmar</h1>
        <Link to="/productos" className="btn-primary mt-6">Ir al catálogo</Link>
      </section>
    )
  }

  return (
    <section className="container-page py-10">
      <div className="mb-8">
        <span className="badge bg-campo-100 text-campo-800">✅ Confirmar pedido</span>
        <h1 className="mt-4 text-3xl font-black text-noche">Datos de entrega rural</h1>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <div className="card-soft space-y-5 p-6">
          <label className="block">
            <span className="mb-2 block text-sm font-black text-noche">Dirección, finca o vereda</span>
            <textarea className="input-soft min-h-28" value={form.address} onChange={(event) => update('address', event.target.value)} placeholder="Ej: Finca El Paraíso, Vereda Venecia" required />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-black text-noche">Teléfono de contacto</span>
            <input className="input-soft" value={form.phone} onChange={(event) => update('phone', event.target.value)} placeholder="Ej: 310 000 0000" required />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-black text-noche">Método de pago simulado</span>
            <select className="input-soft" value={form.payment} onChange={(event) => update('payment', event.target.value)}>
              <option>Contra entrega</option>
              <option>Transferencia</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-black text-noche">Observaciones para el repartidor</span>
            <textarea className="input-soft min-h-24" value={form.notes} onChange={(event) => update('notes', event.target.value)} placeholder="Ej: llamar al llegar al puente de la vereda" />
          </label>
        </div>

        <aside className="card-soft h-fit p-6">
          <h2 className="text-xl font-black text-noche">Resumen</h2>
          <div className="mt-4 space-y-3">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between gap-4 text-sm">
                <span className="text-slate-600">{item.quantity} x {item.name}</span>
                <strong>{formatCOP(item.price * item.quantity)}</strong>
              </div>
            ))}
          </div>
          <div className="mt-5 space-y-3 border-t border-slate-200 pt-4 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><strong>{formatCOP(subtotal)}</strong></div>
            <div className="flex justify-between"><span>Envío rural</span><strong>{formatCOP(shipping)}</strong></div>
            <div className="flex justify-between text-lg font-black text-noche"><span>Total</span><span>{formatCOP(total)}</span></div>
          </div>
          <button disabled={loading} className="btn-primary mt-6 w-full disabled:opacity-60" type="submit">
            {loading ? 'Confirmando...' : 'Confirmar pedido'}
          </button>
        </aside>
      </form>
    </section>
  )
}
