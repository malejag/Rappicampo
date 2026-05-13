import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from './Logo.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { useCart } from '../context/CartContext.jsx'
import { roleHome } from '../utils/format.js'

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/productos', label: 'Productos' },
  { to: '/chat', label: 'Asistente IA' },
  { to: '/seguimiento', label: 'Seguimiento' }
]

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth()
  const { totalItems } = useCart()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-40 border-b border-campo-100/80 bg-white/90 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between gap-3">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `rounded-2xl px-4 py-2 text-sm font-bold transition ${isActive ? 'bg-campo-100 text-campo-800' : 'text-slate-600 hover:bg-campo-50 hover:text-campo-800'}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/carrito" className="relative rounded-2xl border border-campo-100 bg-white px-4 py-2 font-bold text-campo-800 shadow-sm hover:bg-campo-50">
            🛒 <span className="hidden sm:inline">Carrito</span>
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 grid h-6 min-w-6 place-items-center rounded-full bg-maiz px-1 text-xs font-black text-noche">{totalItems}</span>
            )}
          </Link>

          {isAuthenticated ? (
            <div className="hidden items-center gap-2 md:flex">
              <Link to={roleHome(user.role)} className="rounded-2xl bg-noche px-4 py-2 text-sm font-bold text-white hover:opacity-90">
                Mi panel
              </Link>
              <button onClick={handleLogout} className="rounded-2xl px-3 py-2 text-sm font-bold text-slate-500 hover:bg-slate-100">Salir</button>
            </div>
          ) : (
            <Link to="/login" className="btn-primary hidden md:inline-flex">Iniciar sesión</Link>
          )}
        </div>
      </div>

      <div className="container-page flex gap-2 overflow-x-auto pb-3 lg:hidden">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold ${isActive ? 'bg-campo-600 text-white' : 'bg-campo-50 text-campo-800'}`}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  )
}
