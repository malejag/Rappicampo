import { useMemo, useState } from 'react'
import { sendChatMessage } from '../services/api.js'
import ProductCard from './ProductCard.jsx'

const suggestions = [
  'Necesito alimento para animales',
  'Quiero productos para cultivos',
  'Buscar productos económicos',
  'Recomiéndame productos para gallinas'
]

export default function ChatAssistant() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      text: 'Hola, soy el asistente de RappiCampo. ¿Qué producto necesitas para tu finca o negocio?',
      products: []
    }
  ])

  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const recommendedProducts = useMemo(() => {
    return messages
      .flatMap((message) => message.products || [])
      .slice(-5)
  }, [messages])

  const submitMessage = async (text = input) => {
    const clean = text.trim()
    if (!clean || loading) return

    const userMessage = {
      id: Date.now(),
      role: 'user',
      text: clean,
      products: []
    }

    setMessages((current) => [...current, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await sendChatMessage(clean)

      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: 'assistant',
          text: response.text,
          products: response.products || []
        }
      ])
    } catch (error) {
      console.error(error)

      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: 'assistant',
          text: 'No pude conectar con el asistente en este momento. Revisa que la API esté activa.',
          products: []
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="card-soft overflow-hidden">
        <div className="border-b border-campo-100 bg-campo-50 p-5">
          <h2 className="text-xl font-black text-noche">🤖 Asistente inteligente RappiCampo</h2>
          <p className="mt-1 text-sm text-slate-600">
            Conectado con FastAPI y la ontología en Fuseki.
          </p>
        </div>

        <div className="h-[460px] space-y-4 overflow-y-auto p-5">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[82%] rounded-3xl px-5 py-3 text-sm leading-6 ${
                  message.role === 'user'
                    ? 'bg-campo-600 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="rounded-3xl bg-slate-100 px-5 py-3 text-sm text-slate-500">
              El asistente está consultando la ontología de RappiCampo...
            </div>
          )}
        </div>

        <div className="border-t border-campo-100 p-5">
          <div className="mb-4 flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => submitMessage(suggestion)}
                className="rounded-full bg-campo-50 px-4 py-2 text-xs font-bold text-campo-800 hover:bg-campo-100"
              >
                {suggestion}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => event.key === 'Enter' && submitMessage()}
              className="input-soft"
              placeholder="Escribe: necesito productos para mi finca..."
            />
            <button onClick={() => submitMessage()} className="btn-primary">
              Enviar
            </button>
          </div>
        </div>
      </section>

      <aside>
        <div className="mb-4">
          <h3 className="text-xl font-black text-noche">Recomendaciones</h3>
          <p className="text-sm text-slate-600">
            Productos sugeridos por el asistente desde la ontología.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {recommendedProducts.length > 0 ? (
            recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="card-soft p-6 text-sm leading-6 text-slate-600">
              Pregúntale al asistente por animales, cultivos, mercado o herramientas para ver recomendaciones.
            </div>
          )}
        </div>
      </aside>
    </div>
  )
}