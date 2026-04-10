import StepBadge from '../components/StepBadge'

function Step3VehicleConfirm() {
  return (
    <div className="card">
      <StepBadge n={3} label="차량 정보 확인" />
      <h2 className="card-title">
        <span className="accent">차량 정보</span>를
        <br />
        확인해 주세요
      </h2>
      <p className="card-subtitle">
        아래 정보가 맞는지 확인하고, 잘못된 경우 수정해 주세요
      </p>

      <div className="info-box">
        <div className="info-label">차량</div>
        <div className="info-val">현대 쏘나타</div>
      </div>

      <div className="detail-row">
        <span className="detail-key">연식</span>
        <span className="detail-val">2023년 2월 10일 이전</span>
      </div>
      <div className="detail-row">
        <span className="detail-key">모델</span>
        <span className="detail-val">쏘나타 L2.5 터보 N LINE</span>
      </div>
      <div className="detail-row">
        <span className="detail-key">옵션</span>
        <span className="detail-val">
          EV, 모터, 에어컨, P/S, ABS, AIR-D, IM, 5인승
        </span>
      </div>
      <div className="detail-row">
        <span className="detail-key">등급</span>
        <span
          className="detail-val"
          style={{ color: 'var(--axa-blue)', fontWeight: 800 }}
        >
          프리미엄
        </span>
      </div>

      <div className="divider"></div>

      <div className="field-group">
        <div className="field-label">
          운행형태 <span className="required">*</span>
        </div>
        <select className="input" defaultValue="해당없음">
          <option>해당없음</option>
          <option>출퇴근용</option>
          <option>영업용</option>
          <option>레저용</option>
        </select>
      </div>

      <div className="field-group">
        <div className="field-label">전기차 기입사항</div>
        <input className="input" placeholder="해당사항 없으면 비워두세요" />
      </div>
    </div>
  )
}

export default Step3VehicleConfirm