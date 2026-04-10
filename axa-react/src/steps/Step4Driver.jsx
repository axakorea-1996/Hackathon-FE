import StepBadge from '../components/StepBadge'

const DRIVER_OPTIONS = [
  { label: '본인', emoji: '🧑', value: '본인' },
  { label: '부부', emoji: '👫', value: '부부' },
  { label: '가족', emoji: '👨‍👩‍👧', value: '가족' },
  { label: '누구나', emoji: '🚘', value: '누구나' },
]

function Step4Driver({ state, actions }) {
  return (
    <div className="card">
      <StepBadge n={4} label="운전자 범위 선택" />
      <h2 className="card-title">
        누가 운전하실 예정인가요?
        <br />
        <span className="accent">운전자 범위</span>를 선택해 주세요
      </h2>
      <p className="card-subtitle">
        운전자 범위에 따라 보험료가 달라질 수 있어요
      </p>

      <div className="driver-visual">
        {DRIVER_OPTIONS.map((driver) => {
          const selected = state.driverScope === driver.value
          return (
            <div
              key={driver.value}
              className={`driver-figure ${selected ? 'selected' : ''}`}
              onClick={() => actions.setField('driverScope', driver.value)}
            >
              <div className="driver-avatar">{driver.emoji}</div>
              <div className="driver-name">{driver.label}</div>
            </div>
          )
        })}
      </div>

      <div className="info-box">
        <div className="info-label">선택된 운전자 범위</div>
        <div className="info-val">{state.driverScope}</div>
      </div>

      <div className="notice">
        👀 운전자 범위를 넓게 설정할수록 보험료가 높아질 수 있어요.
      </div>
    </div>
  )
}

export default Step4Driver