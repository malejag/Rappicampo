export default function SearchBar({ value, onChange, placeholder = 'Buscar productos, tienda o categoría...' }) {
  return (
    <div className="relative w-full">
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg">🔎</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="input-soft pl-12"
        placeholder={placeholder}
      />
    </div>
  )
}
