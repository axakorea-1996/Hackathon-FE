import StepBadge from '../components/StepBadge'

function formatNum(n) {
  return n.toLocaleString('ko-KR')
}

function Step7InsuranceConfirm({ state, actions }) {
  return (
    <div className="card">
      <StepBadge n={7} label="보험 내용 확인" />
      <h2 className="card-title">
        거의 다 왔어요! 🏁
        <br />
        <span className="accent">보험 내용</span> 확인 및 약관에
        <br />
        동의해주세요
      </h2>

      <div className="section-tag">자동차보험 상품설명서</div>

      <div className="scroll-box">
        <div className="detail-row">
          <span className="detail-key">보험기간</span>
          <span className="detail-val">2023.08.08 – 2024.08.08</span>
        </div>
        <div className="detail-row">
          <span className="detail-key">피보험자동차</span>
          <span className="detail-val">35ㅏ4321(쏘나타 2.5)</span>
        </div>
        <div className="detail-row">
          <span className="detail-key">운전자 범위</span>
          <span className="detail-val">{state.driverScope}</span>
        </div>
        <div className="detail-row">
          <span className="detail-key">보험료</span>
          <span
            className="detail-val"
            style={{ color: 'var(--axa-navy)', fontWeight: 800 }}
          >
            {formatNum(1042280)}원
          </span>
        </div>
      </div>

      <div
        className={`terms-all ${state.termsAll ? 'checked' : ''}`}
        onClick={actions.toggleAll}
      >
        <div className={`check-box ${state.termsAll ? 'checked' : ''}`}></div>
        <span>약관 내용 모두 확인했어요</span>
      </div>

      <div className="terms-list">
        <div className="term-item" onClick={() => actions.toggleTerm(0)}>
          <div className={`check-box ${state.terms[0] ? 'checked' : ''}`}></div>
          <div className="term-text">
            <span className="required-tag">[필수]</span> 자동차보험 약관 동의
          </div>
          <span className="arrow-btn">›</span>
        </div>

        <div className="term-item" onClick={() => actions.toggleTerm(1)}>
          <div className={`check-box ${state.terms[1] ? 'checked' : ''}`}></div>
          <div className="term-text">
            <span className="required-tag">[필수]</span> 전자청약 확인서 동의
          </div>
          <span className="arrow-btn">›</span>
        </div>

        <div className="term-item" onClick={() => actions.toggleTerm(2)}>
          <div className={`check-box ${state.terms[2] ? 'checked' : ''}`}></div>
          <div className="term-text">
            <span className="opt-tag">[선택]</span> 마케팅 활용 동의
          </div>
          <span className="arrow-btn">›</span>
        </div>
      </div>
    </div>
  )
}

export default Step7InsuranceConfirm