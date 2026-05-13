import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-campo-100 bg-white">
      <div className="container-page grid gap-8 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
            Plataforma demo de comercio electrónico rural para conectar veredas, tiendas, supermercados y repartidores en Florencia, Caquetá.
          </p>
        </div>
        <div>
          <h3 className="font-black text-noche">Módulos</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Productos agrícolas y veterinarios</li>
            <li>Pedidos y entregas rurales</li>
            <li>Asistente inteligente</li>
          </ul>
        </div>
        <div>
          <h3 className="font-black text-noche">Tecnologías previstas</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>React + Vite + Tailwind</li>
            <li>FastAPI + Supabase/PostgreSQL</li>
            <li>Firebase para archivos o autenticación</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
