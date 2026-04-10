import StepBadge from '../components/StepBadge'

const TERMS = [
  ['수집이용에 관한 사항', 'required'],
  ['제공에 관한 사항', 'required'],
  ['조회에 관한 사항', 'required'],
  ['소비자 권익보호에 관한 사항', 'opt'],
  ['개인(신용)정보 수집·이용에 관한 사항', 'opt'],
]

function Step1Terms({ state, actions }) {
  return (
    <div className="card">
      <StepBadge n={1} label="약관 동의" />
      <h2 className="card-title">
        보험료를 계산하기 위해<br />
        <span className="accent">약관동의</span>가 필요해요
      </h2>
      <p className="card-subtitle">서비스 이용을 위해 아래 내용에 동의해 주세요</p>

      <div className={`terms-all ${state.termsAll ? 'checked' : ''}`} onClick={actions.toggleAll}>
        <div className={`check-box ${state.termsAll ? 'checked' : ''}`}></div>
        <span>전체동의</span>
        <span style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--text-muted)' }}>
          필수+선택 모두 포함
        </span>
      </div>

      <div className="terms-list">
        {TERMS.map((term, i) => (
          <div key={i} className="term-item" onClick={() => actions.toggleTerm(i)}>
            <div className={`check-box ${state.terms[i] ? 'checked' : ''}`}></div>
            <div className="term-text">
              <span className={term[1] === 'required' ? 'required-tag' : 'opt-tag'}>
                {term[1] === 'required' ? '[필수]' : '[선택]'}
              </span>{' '}
              {term[0]}
            </div>
            <span className="arrow-btn">›</span>
          </div>
        ))}
      </div>

      <div className="notice" style={{ marginTop: 16 }}>
        ℹ️ 필수 항목에 동의하지 않으시면 서비스 이용이 제한될 수 있어요.
      </div>
    </div>
  )
}

export default Step1Terms