import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'rappicampo_cart'
const SHIPPING_COST = 12000

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        setItems(JSON.parse(saved))
      } catch {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addToCart = (product, quantity = 1) => {
    setItems((current) => {
      const exists = current.find((item) => item.id === product.id)
      if (exists) {
        return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
      }
      return [...current, { ...product, quantity }]
    })
  }

  const removeFromCart = (id) => {
    setItems((current) => current.filter((item) => item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    const nextQuantity = Math.max(1, Number(quantity) || 1)
    setItems((current) => current.map((item) => item.id === id ? { ...item, quantity: nextQuantity } : item))
  }

  const clearCart = () => setItems([])

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = items.length > 0 ? SHIPPING_COST : 0
  const total = subtotal + shipping
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

  const value = useMemo(() => ({
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    shipping,
    total,
    totalItems
  }), [items, subtotal, shipping, total, totalItems])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart debe usarse dentro de CartProvider')
  return context
}
