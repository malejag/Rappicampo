import { demoOrders } from '../data/mockData.js'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const wait = (ms = 350) => new Promise((resolve) => setTimeout(resolve, ms))

function getProductEmoji(name = '') {
  const text = name.toLowerCase()

  if (text.includes('gallina') || text.includes('concentrado')) return '🐔'
  if (text.includes('perro') || text.includes('mascota')) return '🐶'
  if (text.includes('fertilizante') || text.includes('cultivo')) return '🌱'
  if (text.includes('semilla') || text.includes('maíz')) return '🌽'
  if (text.includes('arroz')) return '🍚'
  if (text.includes('aceite')) return '🛢️'
  if (text.includes('yuca')) return '🥔'
  if (text.includes('harina')) return '🌾'
  if (text.includes('chocolate')) return '🍫'
  if (text.includes('herramienta') || text.includes('machete')) return '🛠️'

  return '🧺'
}

function normalizeProduct(product, index = 0) {
  const name = product.name || product.nombre || 'Producto RappiCampo'
  const priceValue = product.price || product.precio || 0
  const cleanPrice = Number(String(priceValue).replace(/[^\d.]/g, '')) || 0
  const status = product.available || product.estado || 'Disponible'

  return {
    id: product.id && !String(product.id).startsWith('http') ? product.id : `ont-${index}`,
    uri: product.id || product.uri || '',
    name,
    description: product.description || product.descripcion || 'Producto disponible para entrega rural.',
    price: cleanPrice,
    available: status,
    category: product.category || 'ontologia',
    categoryLabel: product.categoryLabel || product.category || 'Producto rural',
    store: product.store || product.tienda || 'RappiCampo',
    location: product.location || 'Florencia, Caquetá',
    deliveryTime: product.deliveryTime || '24 a 48 horas',
    stock: status.toLowerCase().includes('agotado') ? 0 : 10,
    image: product.image || getProductEmoji(name)
  }
}

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  })

  if (!response.ok) {
    throw new Error('Error al conectar con RappiCampo')
  }

  return response.json()
}

export async function getProducts() {
  const data = await request('/api/products')
  return data.map((product, index) => normalizeProduct(product, index))
}

export async function getProductById(id) {
  const products = await getProducts()
  return products.find((product) => product.id === id)
}

export async function createOrder(orderPayload) {
  await wait(500)

  const order = {
    id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
    createdAt: new Date().toISOString(),
    status: 'Pedido recibido',
    ...orderPayload
  }

  localStorage.setItem('rappicampo_last_order', JSON.stringify(order))
  return order
}

export async function getOrders() {
  await wait()
  return demoOrders
}

export async function loginUser(credentials) {
  await wait()
  return { token: `demo-token-${Date.now()}`, ...credentials }
}

export async function registerUser(payload) {
  await wait()
  return { id: crypto.randomUUID(), ...payload }
}

export async function sendChatMessage(message) {
  const data = await request('/api/chat', {
    method: 'POST',
    body: JSON.stringify({ message })
  })

  const recommendations = data.recomendaciones || []

  return {
    text: data.respuesta || 'El asistente respondió correctamente.',
    products: recommendations.map((product, index) => normalizeProduct(product, index))
  }
}