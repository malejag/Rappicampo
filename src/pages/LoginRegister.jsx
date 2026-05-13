import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import RoleSelector from '../components/RoleSelector.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { roleHome } from '../utils/format.js'

export default function LoginRegister() {
  const [mode, setMode] = useState('login')
  const [role, setRole] = useState('cliente')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const { login, register } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const update = (field, value) => setForm((current) => ({ ...current, [field]: value }))

  const handleSubmit = (event) => {
    event.preventDefault()
    const payload = { ...form, role }
    const user = mode === 'login' ? login(payload) : register(payload)
    const destination = location.state?.from || roleHome(user.role)
    navigate(destination, { replace: true })
  }

  return (
    <section className="container-page grid items-start gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="card-soft p-8">
        <span className="badge bg-campo-100 text-campo-800">Acceso demo</span>
        <h1 className="mt-4 text-3xl font-black text-noche">Entra a RappiCampo según tu rol</h1>
        <p className="mt-3 leading-7 text-slate-600">
          Esta versión guarda una sesión simulada en localStorage. Luego se podrá conectar con Firebase Auth o FastAPI.
        </p>
        <div className="mt-6 rounded-3xl bg-maiz/20 p-5 text-sm leading-6 text-noche">
          💡 Puedes iniciar con cualquier correo y contraseña. Selecciona el rol para ver el panel correspondiente.
        </div>
      </div>

      <div className="card-soft p-6 sm:p-8">
        <div className="mb-6 grid grid-cols-2 rounded-2xl bg-slate-100 p-1">
          <button onClick={() => setMode('login')} className={`rounded-xl py-3 font-black ${mode === 'login' ? 'bg-white text-campo-800 shadow-sm' : 'text-slate-500'}`}>Iniciar sesión</button>
          <button onClick={() => setMode('register')} className={`rounded-xl py-3 font-black ${mode === 'register' ? 'bg-white text-campo-800 shadow-sm' : 'text-slate-500'}`}>Registrarse</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {mode === 'register' && (
            <label className="block">
              <span className="mb-2 block text-sm font-black text-noche">Nombre completo</span>
              <input className="input-soft" value={form.name} onChange={(event) => update('name', event.target.value)} placeholder="Ej: Rosa María Perdomo" />
            </label>
          )}
          <label className="block">
            <span className="mb-2 block text-sm font-black text-noche">Correo electrónico</span>
            <input className="input-soft" type="email" value={form.email} onChange={(event) => update('email', event.target.value)} placeholder="usuario@rappicampo.com" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-black text-noche">Contraseña</span>
            <input className="input-soft" type="password" value={form.password} onChange={(event) => update('password', event.target.value)} placeholder="Contraseña demo" />
          </label>

          <div>
            <span className="mb-3 block text-sm font-black text-noche">Tipo de usuario</span>
            <RoleSelector value={role} onChange={setRole} />
          </div>

          <button className="btn-primary w-full" type="submit">
            {mode === 'login' ? 'Entrar al panel' : 'Crear cuenta demo'}
          </button>
        </form>
      </div>
    </section>
  )
}
