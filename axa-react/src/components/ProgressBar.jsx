import { STEPS } from '../data/insuranceData'

function ProgressBar({ currentStep, totalSteps }) {
  const pct = ((currentStep - 1) / (totalSteps - 1)) * 100

  return (
    <div className="progress-wrap">
      <div className="step-dots">
        {STEPS.map((_, i) => {
          const n = i + 1
          const dotClass = n < currentStep ? 'dot done' : n === currentStep ? 'dot active' : 'dot'

          return (
            <div key={n} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              {i > 0 && <div className={`dot-line ${n <= currentStep ? 'done' : ''}`}></div>}
              <div className={dotClass}>{n < currentStep ? '✓' : n}</div>
            </div>
          )
        })}
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${pct}%` }}></div>
      </div>
    </div>
  )
}

export default ProgressBar