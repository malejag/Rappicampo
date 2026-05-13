import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatCOP } from '../utils/format.js'

export default function Cart() {
  const { items, updateQuantity, removeFromCart, subtotal, shipping, total } = useCart()

  return (
    <section className="container-page py-10">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="badge bg-campo-100 text-campo-800">🛒 Carrito de compras</span>
          <h1 className="mt-4 text-3xl font-black text-noche">Revisa tu pedido rural</h1>
        </div>
        <Link to="/productos" className="btn-secondary">Seguir comprando</Link>
      </div>

      {items.length === 0 ? (
        <div className="card-soft p-10 text-center">
          <p className="text-6xl">🧺</p>
          <h2 className="mt-4 text-2xl font-black text-noche">Tu carrito está vacío</h2>
          <p className="mt-2 text-slate-600">Agrega productos de veterinaria, mercado, fertilizantes o herramientas.</p>
          <Link to="/productos" className="btn-primary mt-6">Ver productos</Link>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="card-soft flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
                <div className="grid h-24 w-24 shrink-0 place-items-center rounded-3xl bg-campo-50 text-5xl">{item.image}</div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-black text-noche">{item.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{item.store}</p>
                  <p className="mt-2 font-black text-campo-800">{formatCOP(item.price)}</p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(event) => updateQuantity(item.id, event.target.value)}
                    className="input-soft w-24"
                  />
                  <button onClick={() => removeFromCart(item.id)} className="rounded-2xl bg-red-50 px-4 py-3 font-bold text-red-600 hover:bg-red-100">Eliminar</button>
                </div>
              </div>
            ))}
          </div>

          <aside className="card-soft h-fit p-6">
            <h2 className="text-xl font-black text-noche">Resumen del pedido</h2>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><strong>{formatCOP(subtotal)}</strong></div>
              <div className="flex justify-between"><span>Envío rural estimado</span><strong>{formatCOP(shipping)}</strong></div>
              <div className="border-t border-slate-200 pt-3 text-lg font-black text-noche flex justify-between"><span>Total</span><span>{formatCOP(total)}</span></div>
            </div>
            <Link to="/checkout" className="btn-primary mt-6 w-full">Realizar pedido</Link>
            <p className="mt-4 text-xs leading-5 text-slate-500">El costo de envío es simulado. En la versión real dependerá de la ruta, vereda y disponibilidad del repartidor.</p>
          </aside>
        </div>
      )}
    </section>
  )
}
