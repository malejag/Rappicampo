import { NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'
import { useAuth } from '../context/AuthContext.jsx'

const linksByRole = {
  cliente: [
    { to: '/panel/cliente', label: 'Panel cliente', icon: '👨‍🌾' },
    { to: '/productos', label: 'Comprar productos', icon: '🛒' },
    { to: '/seguimiento', label: 'Seguimiento', icon: '📦' },
    { to: '/chat', label: 'Asistente IA', icon: '🤖' }
  ],
  tienda: [
    { to: '/panel/tienda', label: 'Panel tienda', icon: '🏪' },
    { to: '/productos', label: 'Ver catálogo', icon: '🧺' },
    { to: '/chat', label: 'Asistente IA', icon: '🤖' }
  ],
  repartidor: [
    { to: '/panel/repartidor', label: 'Mis entregas', icon: '🛵' },
    { to: '/seguimiento', label: 'Seguimiento', icon: '📍' }
  ],
  admin: [
    { to: '/panel/admin', label: 'Dashboard', icon: '📊' },
    { to: '/productos', label: 'Productos', icon: '🧺' },
    { to: '/chat', label: 'Asistente IA', icon: '🤖' }
  ]
}

export default function Sidebar() {
  const { user, logout } = useAuth()
  const links = linksByRole[user?.role] || linksByRole.cliente

  return (
    <aside className="sticky top-0 hidden h-screen w-72 border-r border-campo-100 bg-white p-5 lg:block">
      <Logo />
      <div className="mt-8 rounded-3xl bg-campo-50 p-4">
        <p className="text-xs font-black uppercase tracking-wide text-campo-700">Sesión demo</p>
        <p className="mt-2 font-black text-noche">{user?.name}</p>
        <p className="text-sm text-slate-500">Rol: {user?.role}</p>
      </div>
      <nav className="mt-6 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `flex items-center gap-3 rounded-2xl px-4 py-3 font-bold transition ${isActive ? 'bg-campo-600 text-white' : 'text-slate-600 hover:bg-campo-50 hover:text-campo-800'}`}
          >
            <span>{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>
      <button onClick={logout} className="btn-secondary mt-8 w-full">Cerrar sesión</button>
    </aside>
  )
}
