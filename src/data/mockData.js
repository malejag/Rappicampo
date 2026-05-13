export const roles = [
  { id: 'cliente', label: 'Cliente rural', icon: '👨‍🌾', description: 'Compra productos para la finca o el hogar.' },
  { id: 'tienda', label: 'Tienda/Supermercado', icon: '🏪', description: 'Publica productos y recibe pedidos.' },
  { id: 'repartidor', label: 'Repartidor', icon: '🛵', description: 'Gestiona entregas rurales.' },
  { id: 'admin', label: 'Administrador', icon: '🧑‍💻', description: 'Controla usuarios, tiendas y pedidos.' }
]

export const categories = [
  { id: 'veterinaria', name: 'Veterinaria', icon: '🐄', description: 'Cuidado animal y salud de la finca.' },
  { id: 'concentrados', name: 'Concentrados', icon: '🌽', description: 'Alimentos para aves, cerdos, perros y ganado.' },
  { id: 'herramientas', name: 'Herramientas', icon: '🧰', description: 'Elementos básicos para el trabajo rural.' },
  { id: 'mercado', name: 'Mercado', icon: '🛒', description: 'Productos de supermercado para el hogar.' },
  { id: 'fertilizantes', name: 'Fertilizantes', icon: '🌱', description: 'Insumos para cultivos y huertas.' },
  { id: 'medicamentos', name: 'Medicamentos veterinarios', icon: '💉', description: 'Productos simulados para uso veterinario.' }
]

export const products = [
  {
    id: 'p-001',
    name: 'Alimento para perros CampoCan 25 kg',
    category: 'concentrados',
    categoryLabel: 'Concentrados',
    price: 128000,
    stock: 18,
    available: true,
    store: 'AgroTienda Venecia',
    location: 'Vereda Venecia, Florencia',
    deliveryTime: '1 a 2 días',
    image: '🐕',
    description: 'Concentrado completo para perros adultos de finca. Presentación familiar, ideal para hogares rurales con varios animales.'
  },
  {
    id: 'p-002',
    name: 'Concentrado para gallinas ponedoras 40 kg',
    category: 'concentrados',
    categoryLabel: 'Concentrados',
    price: 96500,
    stock: 24,
    available: true,
    store: 'Depósito El Corral',
    location: 'Florencia, Caquetá',
    deliveryTime: '24 a 48 horas',
    image: '🐔',
    description: 'Alimento balanceado para gallinas ponedoras. Ayuda a mantener una buena producción en patios y pequeñas granjas.'
  },
  {
    id: 'p-003',
    name: 'Vacuna veterinaria simulada Bovino Plus',
    category: 'medicamentos',
    categoryLabel: 'Medicamentos veterinarios',
    price: 42000,
    stock: 8,
    available: true,
    store: 'VetCampo Caquetá',
    location: 'Florencia, Caquetá',
    deliveryTime: 'Entrega programada',
    image: '💉',
    description: 'Producto veterinario simulado para demostración académica. Requiere asesoría técnica antes de su uso real.'
  },
  {
    id: 'p-004',
    name: 'Fertilizante orgánico Tierra Viva 50 kg',
    category: 'fertilizantes',
    categoryLabel: 'Fertilizantes',
    price: 78000,
    stock: 14,
    available: true,
    store: 'AgroInsumos La Montaña',
    location: 'Morelia, Caquetá',
    deliveryTime: '2 a 3 días',
    image: '🌿',
    description: 'Fertilizante para cultivos de pancoger, huertas y proyectos agrícolas rurales. Aporta nutrientes al suelo.'
  },
  {
    id: 'p-005',
    name: 'Semillas de maíz amarillo x libra',
    category: 'fertilizantes',
    categoryLabel: 'Fertilizantes',
    price: 18500,
    stock: 35,
    available: true,
    store: 'Semillas del Sur',
    location: 'Florencia, Caquetá',
    deliveryTime: '24 horas',
    image: '🌽',
    description: 'Semilla de maíz para siembra rural. Producto pensado para pequeños cultivos y huertas familiares.'
  },
  {
    id: 'p-006',
    name: 'Arroz familiar 25 libras',
    category: 'mercado',
    categoryLabel: 'Mercado',
    price: 69500,
    stock: 40,
    available: true,
    store: 'Supermercado CampoCentro',
    location: 'Florencia, Caquetá',
    deliveryTime: '1 día',
    image: '🍚',
    description: 'Arroz familiar para hogares rurales. Presentación rendidora para compras de mercado semanales o quincenales.'
  },
  {
    id: 'p-007',
    name: 'Aceite vegetal 3 litros',
    category: 'mercado',
    categoryLabel: 'Mercado',
    price: 34800,
    stock: 27,
    available: true,
    store: 'Supermercado CampoCentro',
    location: 'Florencia, Caquetá',
    deliveryTime: '1 día',
    image: '🛢️',
    description: 'Aceite vegetal para la canasta familiar. Ideal para completar el pedido de mercado sin viajar a la ciudad.'
  },
  {
    id: 'p-008',
    name: 'Machete campesino con funda',
    category: 'herramientas',
    categoryLabel: 'Herramientas',
    price: 54500,
    stock: 12,
    available: true,
    store: 'Ferretería Rural San Pedro',
    location: 'Florencia, Caquetá',
    deliveryTime: '1 a 2 días',
    image: '🧰',
    description: 'Herramienta básica de trabajo rural. Incluye funda de protección para transporte seguro.'
  },
  {
    id: 'p-009',
    name: 'Kit cuidado bovino básico',
    category: 'veterinaria',
    categoryLabel: 'Veterinaria',
    price: 156000,
    stock: 6,
    available: true,
    store: 'VetCampo Caquetá',
    location: 'Florencia, Caquetá',
    deliveryTime: 'Entrega programada',
    image: '🐮',
    description: 'Kit simulado con elementos de cuidado bovino para demostración de marketplace rural.'
  },
  {
    id: 'p-010',
    name: 'Bulto de sal mineralizada 25 kg',
    category: 'veterinaria',
    categoryLabel: 'Veterinaria',
    price: 88500,
    stock: 16,
    available: true,
    store: 'AgroTienda Venecia',
    location: 'Vereda Venecia, Florencia',
    deliveryTime: '1 a 2 días',
    image: '🧂',
    description: 'Suplemento mineral simulado para animales de finca. Producto de uso frecuente en zonas ganaderas.'
  },
  {
    id: 'p-011',
    name: 'Pala metálica reforzada',
    category: 'herramientas',
    categoryLabel: 'Herramientas',
    price: 67200,
    stock: 9,
    available: true,
    store: 'Ferretería Rural San Pedro',
    location: 'Florencia, Caquetá',
    deliveryTime: '1 a 2 días',
    image: '⛏️',
    description: 'Pala resistente para labores de siembra, construcción ligera y mantenimiento de caminos veredales.'
  },
  {
    id: 'p-012',
    name: 'Panela campesina x 12 unidades',
    category: 'mercado',
    categoryLabel: 'Mercado',
    price: 26500,
    stock: 32,
    available: true,
    store: 'Mercado Rural El Portal',
    location: 'Florencia, Caquetá',
    deliveryTime: '24 horas',
    image: '🍯',
    description: 'Producto tradicional para hogares rurales y tiendas pequeñas. Ideal para bebidas y preparación de alimentos.'
  }
]

export const demoOrders = [
  {
    id: 'ORD-1001',
    customer: 'Don Álvaro Méndez',
    zone: 'Vereda Venecia',
    total: 224500,
    status: 'En camino',
    store: 'AgroTienda Venecia',
    deliveryPerson: 'Carlos Ríos',
    items: ['Alimento para perros CampoCan', 'Concentrado para gallinas']
  },
  {
    id: 'ORD-1002',
    customer: 'Finca La Esperanza',
    zone: 'Kilómetro 12 vía Morelia',
    total: 147500,
    status: 'En preparación',
    store: 'Supermercado CampoCentro',
    deliveryPerson: 'Pendiente por asignar',
    items: ['Arroz familiar', 'Aceite vegetal', 'Panela campesina']
  },
  {
    id: 'ORD-1003',
    customer: 'María Lucía Perdomo',
    zone: 'Vereda El Caraño',
    total: 78000,
    status: 'Pedido recibido',
    store: 'AgroInsumos La Montaña',
    deliveryPerson: 'Pendiente por asignar',
    items: ['Fertilizante orgánico Tierra Viva']
  }
]

export const deliverySteps = [
  { key: 'recibido', label: 'Pedido recibido', description: 'Tu pedido fue registrado en RappiCampo.' },
  { key: 'preparacion', label: 'En preparación', description: 'La tienda está separando tus productos.' },
  { key: 'camino', label: 'En camino', description: 'El repartidor va hacia tu vereda.' },
  { key: 'entregado', label: 'Entregado', description: 'El pedido fue recibido exitosamente.' }
]

export const adminStats = [
  { label: 'Usuarios registrados', value: '248', icon: '👥', trend: '+18 este mes' },
  { label: 'Tiendas activas', value: '34', icon: '🏪', trend: '+5 nuevas' },
  { label: 'Pedidos del día', value: '57', icon: '📦', trend: '12 finalizados' },
  { label: 'Entregas pendientes', value: '19', icon: '🛵', trend: '8 en camino' }
]
