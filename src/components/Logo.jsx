import { Link } from 'react-router-dom'

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-campo-600 text-xl text-white shadow-lg shadow-campo-800/20">🧺</span>
      {!compact && (
        <span className="leading-tight">
          <span className="block text-xl font-black text-campo-800">RappiCampo</span>
          <span className="block text-xs font-semibold text-slate-500">Del campo y para el campo</span>
        </span>
      )}
    </Link>
  )
}
