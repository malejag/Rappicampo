export default function DashboardCard({ icon, label, value, trend }) {
  return (
    <div className="card-soft p-5">
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-campo-100 text-2xl">{icon}</span>
        <span className="badge bg-maiz/20 text-noche">{trend}</span>
      </div>
      <p className="mt-5 text-3xl font-black text-noche">{value}</p>
      <p className="mt-1 text-sm font-bold text-slate-500">{label}</p>
    </div>
  )
}
