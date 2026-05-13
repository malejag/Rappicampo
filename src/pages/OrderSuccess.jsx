import { Link } from 'react-router-dom'

export default function OrderSuccess() {
  const lastOrder = JSON.parse(localStorage.getItem('rappicampo_last_order') || 'null')

  return (
    <section className="container-page py-16">
      <div className="card-soft mx-auto max-w-2xl p-8 text-center">
        <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-campo-100 text-4xl">✅</span>
        <h1 className="mt-6 text-3xl font-black text-noche">¡Pedido confirmado!</h1>
        <p className="mt-3 leading-7 text-slate-600">
          Tu pedido fue creado en modo demo. La tienda preparará los productos y el repartidor llevará la entrega hacia tu vereda.
        </p>
        {lastOrder && (
          <div className="mt-6 rounded-3xl bg-campo-50 p-5 text-left">
            <p className="text-sm font-bold text-slate-500">Número de pedido</p>
            <p className="text-2xl font-black text-campo-800">{lastOrder.id}</p>
            <p className="mt-3 text-sm text-slate-600">Entrega: {lastOrder.address}</p>
          </div>
        )}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link to="/seguimiento" className="btn-primary">Ver seguimiento</Link>
          <Link to="/productos" className="btn-secondary">Comprar más productos</Link>
        </div>
      </div>
    </section>
  )
}
