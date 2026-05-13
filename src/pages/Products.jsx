import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import { categories } from '../data/mockData.js'
import { getProducts } from '../services/api.js'

export default function Products() {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const selectedCategory = params.get('categoria') || 'todas'

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true)
        setError('')
        const data = await getProducts()
        setProducts(data)
      } catch (err) {
        console.error(err)
        setError('No se pudieron cargar los productos desde la API.')
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  const filteredProducts = useMemo(() => {
    const term = query.toLowerCase().trim()

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'todas' ||
        product.category === selectedCategory ||
        product.categoryLabel === selectedCategory

      const searchText = [
        product.name,
        product.categoryLabel,
        product.store,
        product.location,
        product.description
      ]
        .join(' ')
        .toLowerCase()

      const matchesQuery = !term || searchText.includes(term)

      return matchesCategory && matchesQuery
    })
  }, [products, query, selectedCategory])

  const setCategory = (category) => {
    if (category === 'todas') setParams({})
    else setParams({ categoria: category })
  }

  return (
    <section className="container-page py-10">
      <div className="grid gap-6 rounded-[2rem] bg-gradient-to-br from-campo-700 to-campo-500 p-6 text-white lg:grid-cols-[1fr_0.9fr] lg:p-10">
        <div>
          <span className="badge bg-white/20 text-white">🧺 Catálogo RappiCampo</span>
          <h1 className="mt-4 text-3xl font-black sm:text-5xl">
            Productos para finca, animales y hogar
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-campo-50">
            Busca productos conectados directamente con la ontología de RappiCampo en la máquina virtual.
          </p>
        </div>

        <div className="rounded-3xl bg-white/15 p-5 backdrop-blur">
          <p className="font-black">Entrega rural disponible</p>
          <p className="mt-2 text-sm leading-6 text-campo-50">
            Zonas demo: Vereda Venecia, Florencia, Morelia y rutas cercanas en Caquetá.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="card-soft p-4">
          <p className="mb-3 font-black text-noche">Filtrar por categoría</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategory('todas')}
              className={`rounded-full px-4 py-2 text-sm font-bold ${
                selectedCategory === 'todas'
                  ? 'bg-campo-600 text-white'
                  : 'bg-campo-50 text-campo-800'
              }`}
            >
              Todas
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setCategory(category.id)}
                className={`rounded-full px-4 py-2 text-sm font-bold ${
                  selectedCategory === category.id
                    ? 'bg-campo-600 text-white'
                    : 'bg-campo-50 text-campo-800'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="card-soft p-4">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Ej: yuca, arroz, aceite, fertilizante, gallinas..."
          />
          <p className="mt-3 text-sm text-slate-500">
            {loading ? 'Cargando productos...' : `${filteredProducts.length} productos encontrados`}
          </p>
        </div>
      </div>

      {error && (
        <div className="card-soft mt-8 border border-red-100 bg-red-50 p-6 text-red-700">
          {error}
        </div>
      )}

      {loading ? (
        <div className="card-soft mt-8 p-8 text-center">
          <p className="text-4xl">⏳</p>
          <h2 className="mt-4 text-2xl font-black text-noche">Cargando productos...</h2>
          <p className="mt-2 text-slate-600">
            Consultando FastAPI y la ontología de RappiCampo.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {!loading && filteredProducts.length === 0 && (
        <div className="card-soft mt-8 p-8 text-center">
          <p className="text-4xl">🔎</p>
          <h2 className="mt-4 text-2xl font-black text-noche">No encontramos productos</h2>
          <p className="mt-2 text-slate-600">
            Prueba con otra palabra o consulta con el asistente inteligente.
          </p>
        </div>
      )}
    </section>
  )
}