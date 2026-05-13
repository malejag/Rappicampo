import ChatAssistant from '../components/ChatAssistant.jsx'

export default function ChatPage() {
  return (
    <section className="container-page py-10">
      <div className="mb-8 max-w-3xl">
        <span className="badge bg-maiz/25 text-noche">🤖 IA en modo demo</span>
        <h1 className="mt-4 text-3xl font-black text-noche">Asistente de compras RappiCampo</h1>
        <p className="mt-3 leading-7 text-slate-600">
          Simula recomendaciones de productos, búsqueda inteligente y apoyo para personas del campo que necesitan comprar de manera sencilla.
        </p>
      </div>
      <ChatAssistant />
    </section>
  )
}
