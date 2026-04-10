import StepBadge from '../components/StepBadge'

function formatNum(n) {
  return n.toLocaleString('ko-KR')
}

function Step9Complete({ state }) {
  return (
    <div className="card">
      <StepBadge n={9} label="가입 완료" />

      <div className="success-wrap">
        <span className="success-emoji">🎉</span>
        <h2 className="success-title">
          <span className="name">{state.name}</span>님,
          <br />
          가입이 완료되었어요!
        </h2>
        <p className="success-desc">
          AXA 다이렉트 자동차보험 가입이 정상적으로 완료되었습니다.
          <br />
          보험증권은 등록된 연락처로 발송될 예정이에요.
        </p>
      </div>

      <div className="info-box">
        <div className="info-label">최종 결제 보험료</div>
        <div className="info-price">{formatNum(1042280)}원</div>
      </div>

      <div className="benefit-list">
        <div className="benefit-item">
          <span className="benefit-icon">📄</span>
          전자청약 확인서 발송 완료
        </div>
        <div className="benefit-item">
          <span className="benefit-icon">🚗</span>
          피보험 차량 등록 완료
        </div>
        <div className="benefit-item">
          <span className="benefit-icon">💙</span>
          AXA 다이렉트 가입 혜택 적용 완료
        </div>
      </div>

      <div className="notice">
        안내 문자와 이메일은 순차 발송될 수 있어요. 잠시 후 다시 확인해 주세요.
      </div>
    </div>
  )
}

export default Step9Complete