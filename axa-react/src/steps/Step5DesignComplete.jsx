import StepBadge from '../components/StepBadge'

function formatNum(n) {
  return n.toLocaleString('ko-KR')
}

function Step5DesignComplete({ state, actions }) {
  const coverageItems = [
    {
      name: '대인배상 I',
      desc: '의무가입',
      checked: true,
      index: 0,
    },
    {
      name: '대물배상',
      desc: '가입금액 2억원',
      checked: state.coverages?.[1] ?? false,
      index: 1,
    },
    {
      name: '자기신체사고',
      desc: '사망/후유장해 1억원',
      checked: state.coverages?.[2] ?? true,
      index: 2,
    },
  ]

  const toggleCoverage = (index) => {
    const next = [...(state.coverages || [true, false, true])]
    next[index] = !next[index]
    actions.setField('coverages', next)
  }

  return (
    <div className="card">
      <StepBadge n={5} label="보험 설계 완료" />
      <h2 className="card-title">
        <span className="accent">{state.name}</span>님의
        <br />
        보험료를 계산했어요
      </h2>
      <p className="card-subtitle">
        추천 설계 기준으로 보험료를 확인해 보세요
      </p>

      <div className="price-summary">
        <div className="price-row">
          <span className="price-label">기본 보험료</span>
          <span className="price-val strike">{formatNum(1283440)}원</span>
        </div>
        <div className="price-row">
          <span className="price-label">할인 적용</span>
          <span className="price-val discount">- {formatNum(241160)}원</span>
        </div>
        <div className="price-row">
          <span className="price-label">최종 보험료</span>
          <span className="price-val big">{formatNum(1042280)}원</span>
        </div>
      </div>

      <div className="tip-chip" style={{ marginBottom: 16 }}>
        💡 현재 선택 기준 최적 요금
      </div>

      {coverageItems.map((item) => (
        <div key={item.index} className="coverage-item">
          <div className="coverage-left">
            <div className="coverage-name">{item.name}</div>
            <div className="coverage-desc">{item.desc}</div>
          </div>
          <div
            className={`toggle ${item.checked ? 'on' : ''}`}
            onClick={() => toggleCoverage(item.index)}
          ></div>
        </div>
      ))}

      <div className="divider"></div>

      <div className="info-box">
        <div className="info-label">선택된 운전자 범위</div>
        <div className="info-val">{state.driverScope}</div>
      </div>
    </div>
  )
}

export default Step5DesignComplete