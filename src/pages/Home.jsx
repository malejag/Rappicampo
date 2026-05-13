import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard.jsx'
import ProductCard from '../components/ProductCard.jsx'
import DashboardCard from '../components/DashboardCard.jsx'
import { categories, products } from '../data/mockData.js'

const benefits = [
  { icon: '⚡', title: 'Pedidos rápidos', text: 'Compra desde tu celular o computador sin desplazarte a la ciudad.' },
  { icon: '🧺', title: 'Productos disponibles', text: 'Veterinaria, concentrados, mercado, herramientas y fertilizantes.' },
  { icon: '🛵', title: 'Entregas rurales', text: 'Seguimiento del pedido hasta tu vereda o finca.' },
  { icon: '🤖', title: 'Asistente inteligente', text: 'Recomendaciones para animales, cultivos y compras económicas.' }
]

export default function Home() {
  const featuredProducts = products.slice(0, 3)

  return (
    <>
      <section className="container-page grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <span className="badge bg-maiz/25 text-noche">🌱 Del campo y para el campo, fácil y rápido</span>
          <h1 className="mt-6 text-4xl font-black leading-tight text-noche sm:text-5xl lg:text-6xl">
            Compra productos para el campo sin salir de tu vereda
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            RappiCampo conecta clientes rurales con tiendas, supermercados y repartidores para llevar productos veterinarios, agrícolas y de mercado hasta zonas como Vereda Venecia y Florencia, Caquetá.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/productos" className="btn-primary">Ver productos</Link>
            <Link to="/login" className="btn-secondary">Iniciar sesión</Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <DashboardCard icon="👥" label="Usuarios demo" value="248" trend="Rural" />
            <DashboardCard icon="🏪" label="Tiendas aliadas" value="34" trend="Activas" />
            <DashboardCard icon="📦" label="Pedidos simulados" value="57" trend="Hoy" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-maiz/40 blur-2xl" />
          <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-campo-300/40 blur-2xl" />
          <div className="card-soft relative overflow-hidden p-6">
            <div className="rounded-[2rem] bg-gradient-to-br from-campo-700 via-campo-600 to-campo-400 p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-campo-100">Marketplace rural</p>
                  <h2 className="mt-2 text-3xl font-black">RappiCampo</h2>
                </div>
                <span className="text-6xl">🧺</span>
              </div>
              <div className="mt-8 grid gap-3">
                {['Veterinaria', 'Concentrados', 'Mercado', 'Entregas rurales'].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl bg-white/15 p-4 backdrop-blur">
                    <span className="font-bold">{item}</span>
                    <span>✓</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-10">
        <div className="mb-8 max-w-2xl">
          <span className="badge bg-campo-100 text-campo-800">Beneficios</span>
          <h2 className="mt-4 text-3xl font-black text-noche">Pensado para comprar fácil, incluso con baja experiencia digital</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="card-soft p-6">
              <span className="text-4xl">{benefit.icon}</span>
              <h3 className="mt-4 text-lg font-black text-noche">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-10">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="badge bg-maiz/25 text-noche">Categorías destacadas</span>
            <h2 className="mt-4 text-3xl font-black text-noche">Todo lo que necesita la finca y el hogar</h2>
          </div>
          <Link to="/productos" className="btn-secondary">Explorar catálogo</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => <CategoryCard key={category.id} category={category} />)}
        </div>
      </section>

      <section className="container-page py-10">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="badge bg-campo-100 text-campo-800">Productos populares</span>
            <h2 className="mt-4 text-3xl font-black text-noche">Listos para entregar en zona rural</h2>
          </div>
          <Link to="/chat" className="btn-warning">Consultar con asistente</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </>
  )
}
