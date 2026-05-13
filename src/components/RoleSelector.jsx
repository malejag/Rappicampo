import { roles } from '../data/mockData.js'

export default function RoleSelector({ value, onChange }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {roles.map((role) => (
        <button
          type="button"
          key={role.id}
          onClick={() => onChange(role.id)}
          className={`rounded-3xl border p-4 text-left transition ${value === role.id ? 'border-campo-500 bg-campo-50 ring-4 ring-campo-100' : 'border-slate-200 bg-white hover:border-campo-200 hover:bg-campo-50'}`}
        >
          <span className="text-2xl">{role.icon}</span>
          <span className="mt-2 block font-black text-noche">{role.label}</span>
          <span className="mt-1 block text-xs leading-5 text-slate-500">{role.description}</span>
        </button>
      ))}
    </div>
  )
}
