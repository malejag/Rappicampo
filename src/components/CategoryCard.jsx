import { Link } from 'react-router-dom'

export default function CategoryCard({ category }) {
  return (
    <Link to={`/productos?categoria=${category.id}`} className="card-soft group block p-5 transition hover:-translate-y-1 hover:bg-campo-50">
      <span className="grid h-16 w-16 place-items-center rounded-3xl bg-campo-100 text-3xl transition group-hover:bg-campo-600 group-hover:text-white">
        {category.icon}
      </span>
      <h3 className="mt-4 text-lg font-black text-noche">{category.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
    </Link>
  )
}
