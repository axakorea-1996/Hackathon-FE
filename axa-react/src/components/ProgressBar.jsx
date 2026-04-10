import { STEPS } from '../data/insuranceData'

function ProgressBar({ state }) {
  if (!state) return null

  const pct = ((state.step - 1) / (state.totalSteps - 1)) * 100

  return (
    <div className="progress-wrap" id="progressArea">
      <div className="step-dots" id="stepDots">
        {STEPS.map((s, i) => {
          const n = i + 1
          return (
            <div key={n} style={{ display: 'contents' }}>
              {i > 0 && (
                <div className={`dot-line ${n <= state.step ? 'done' : ''}`}></div>
              )}
              <div className={`dot ${n < state.step ? 'done' : n === state.step ? 'active' : ''}`}>
                {n < state.step ? '✓' : n}
              </div>
            </div>
          )
        })}
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          id="progressFill"
          style={{ width: `${pct}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar