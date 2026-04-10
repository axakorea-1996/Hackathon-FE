import StepBadge from '../components/StepBadge'
import { VEHICLES } from '../data/insuranceData'
import VehicleCard from '../components/VehicleCard'

function Step2VehicleSelect({ state, actions }) {
  return (
    <div className="card">
      <StepBadge n={2} label="차량 조회" />
      <h2 className="card-title">
        <span className="accent">{state.name}</span>님,<br />조회할 차량을 선택해 주세요
      </h2>
      <p className="card-subtitle">보험 가입 이력이 있는 차량이 조회됩니다</p>

      {VEHICLES.map((vehicle, i) => (
        <VehicleCard
          key={i}
          vehicle={vehicle}
          selected={state.selectedVehicle === i}
          onClick={() => actions.selectVehicle(i)}
        />
      ))}

      <div className="vehicle-add" onClick={() => alert('차량 신규 등록 기능은 준비 중입니다.')}>
        <div className="add-icon">+</div>
        차량 신규등록 (중고차 포함)
      </div>

      <div style={{ marginTop: 20 }}>
        <div className="field-label">차량번호 직접 입력</div>
        <div className="input-row">
          <input
            className={`input ${state.vehiclePlate ? 'filled' : ''}`}
            placeholder="예) 35ㅏ4321"
            value={state.vehiclePlate}
            onChange={(e) => actions.setField('vehiclePlate', e.target.value)}
          />
          <button className="btn btn-primary btn-sm" style={{ width: 80 }}>
            조회
          </button>
        </div>
      </div>
    </div>
  )
}

export default Step2VehicleSelect