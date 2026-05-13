export function formatCOP(value) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(value)
}

export function roleHome(role) {
  const map = {
    cliente: '/panel/cliente',
    tienda: '/panel/tienda',
    repartidor: '/panel/repartidor',
    admin: '/panel/admin'
  }
  return map[role] || '/productos'
}
