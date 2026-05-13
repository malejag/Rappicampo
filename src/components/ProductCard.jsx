import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatCOP } from '../utils/format.js'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  const status = product.available || 'Disponible'
  const price = Number(product.price)
  const priceText = Number.isFinite(price) ? formatCOP(price) : 'Consultar precio'

  return (
    <article className="card-soft group flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl">
      <Link to={`/productos/${product.id}`} className="block bg-gradient-to-br from-campo-50 to-white p-5">
        <div className="grid aspect-[4/3] place-items-center rounded-3xl bg-white text-7xl shadow-inner">
          {product.image || '🧺'}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="badge bg-campo-100 text-campo-800">
            {product.categoryLabel || 'Producto rural'}
          </span>
          <span className={`badge ${
            status.toLowerCase().includes('agotado')
              ? 'bg-red-50 text-red-700'
              : 'bg-emerald-50 text-emerald-700'
          }`}>
            {status}
          </span>
        </div>

        <Link
          to={`/productos/${product.id}`}
          className="text-lg font-black leading-tight text-noche group-hover:text-campo-700"
        >
          {product.name}
        </Link>

        <p className="mt-2 text-sm text-slate-500">{product.store || 'RappiCampo'}</p>
        <p className="mt-1 text-sm text-slate-500">📍 {product.location || 'Florencia, Caquetá'}</p>

        <div className="mt-auto pt-5">
          <p className="text-2xl font-black text-campo-800">{priceText}</p>
          <button onClick={() => addToCart(product)} className="btn-primary mt-4 w-full">
            Agregar al carrito
          </button>
        </div>
      </div>
    </article>
  )
}