import { deliverySteps } from '../data/mockData.js'

export default function OrderTimeline({ current = 'camino' }) {
  const currentIndex = deliverySteps.findIndex((step) => step.key === current)

  return (
    <div className="space-y-5">
      {deliverySteps.map((step, index) => {
        const completed = index <= currentIndex
        return (
          <div key={step.key} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className={`grid h-11 w-11 place-items-center rounded-full text-lg font-black ${completed ? 'bg-campo-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                {completed ? '✓' : index + 1}
              </span>
              {index < deliverySteps.length - 1 && <span className={`h-12 w-1 ${completed ? 'bg-campo-400' : 'bg-slate-200'}`} />}
            </div>
            <div className="pb-4">
              <h3 className={`font-black ${completed ? 'text-campo-800' : 'text-slate-400'}`}>{step.label}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
