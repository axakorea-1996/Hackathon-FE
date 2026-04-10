import StepBadge from '../components/StepBadge'

function Step6SpecialCoverage({ state, actions }) {
  const specials = [
    {
      name: '마일리지 특약',
      desc: '신청 / 2,000Km | 차량계기판·반환 사진 등록',
      on: state.toggles[0],
    },
    {
      name: '블랙박스 특약',
      desc: '차량 내 블랙박스 사진, 차량전면사진 등록',
      on: state.toggles[1],
    },
    {
      name: '자녀 할인 특약',
      desc: '자녀 이름과 주민등록번호를 등록',
      on: state.toggles[2],
    },
  ]

  return (
    <div className="card">
      <StepBadge n={6} label="특약 정보 등록" />
      <h2 className="card-title">
        <span className="accent">할인특약</span> 확인을 위해
        <br />
        정보를 등록해 주세요
      </h2>
      <p className="card-subtitle">
        특약 등록 시 추가 할인 혜택을 받을 수 있어요
      </p>

      {specials.map((s, i) => (
        <div key={i} className="coverage-item">
          <div className="coverage-left">
            <div className="coverage-name">{s.name}</div>
            <div className="coverage-desc">{s.desc}</div>
          </div>
          <div
            className={`toggle ${s.on ? 'on' : ''}`}
            onClick={() => actions.toggleSpecial(i)}
          ></div>
        </div>
      ))}

      <div className="divider"></div>
      <div className="notice">
        📸 나중에 등록하셔도 할인 적용이 가능합니다. 지금은 건너뛰어도
        괜찮아요!
      </div>
    </div>
  )
}

export default Step6SpecialCoverage