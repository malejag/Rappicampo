import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { useCart } from '../context/CartContext.jsx'
import { getProductById, getProducts } from '../services/api.js'
import { formatCOP } from '../utils/format.js'

export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()

  const [product, setProduct] = useState(null)
  const [recommended, setRecommended] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true)

        const selected = await getProductById(id)
        const allProducts = await getProducts()

        setProduct(selected)

        if (selected) {
          const related = allProducts
            .filter((item) => item.id !== selected.id)
            .slice(0, 3)

          setRecommended(related)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [id])

  if (loading) {
    return (
      <section className="container-page py-16 text-center">
        <p className="text-5xl">⏳</p>
        <h1 className="mt-4 text-3xl font-black text-noche">Cargando producto...</h1>
      </section>
    )
  }

  if (!product) {
    return (
      <section className="container-page py-16 text-center">
        <p className="text-5xl">🌾</p>
        <h1 className="mt-4 text-3xl font-black text-noche">Producto no encontrado</h1>
        <Link to="/productos" className="btn-primary mt-6">
          Volver al catálogo
        </Link>
      </section>
    )
  }

  const price = Number(product.price)
  const priceText = Number.isFinite(price) ? formatCOP(price) : 'Consultar precio'

  return (
    <section className="container-page py-10">
      <Link to="/productos" className="font-bold text-campo-700 hover:underline">
        ← Volver a productos
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card-soft p-6">
          <div className="grid aspect-square place-items-center rounded-[2rem] bg-gradient-to-br from-campo-50 to-white text-9xl shadow-inner">
            {product.image || '🧺'}
          </div>
        </div>

        <div className="card-soft p-6 lg:p-8">
          <div className="flex flex-wrap gap-2">
            <span className="badge bg-campo-100 text-campo-800">
              {product.categoryLabel || 'Producto rural'}
            </span>
            <span className="badge bg-emerald-50 text-emerald-700">
              {product.available || 'Disponible'}
            </span>
            <span className="badge bg-maiz/25 text-noche">Entrega rural</span>
          </div>

          <h1 className="mt-5 text-3xl font-black leading-tight text-noche sm:text-4xl">
            {product.name}
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            {product.description}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-campo-50 p-5">
              <p className="text-sm font-bold text-slate-500">Precio</p>
              <p className="mt-1 text-3xl font-black text-campo-800">{priceText}</p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm font-bold text-slate-500">Disponibilidad</p>
              <p className="mt-1 text-xl font-black text-noche">
                {product.available || 'Disponible'}
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm font-bold text-slate-500">Tienda</p>
              <p className="mt-1 font-black text-noche">{product.store}</p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm font-bold text-slate-500">Tiempo estimado</p>
              <p className="mt-1 font-black text-noche">{product.deliveryTime}</p>
            </div>
          </div>

          <button onClick={() => addToCart(product)} className="btn-primary mt-8 w-full text-lg">
            Agregar al carrito
          </button>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-black text-noche">Productos recomendados</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {recommended.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  )
}