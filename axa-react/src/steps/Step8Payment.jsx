import StepBadge from '../components/StepBadge'

function formatNum(n) {
  return n.toLocaleString('ko-KR')
}

function Step8Payment({ state, actions }) {
  const methods = ['일반카드', '앱카드', 'AXA easycard']

  return (
    <div className="card">
      <StepBadge n={8} label="보험료 결제" />
      <h2 className="card-title">
        보험료 <span className="red">{formatNum(1042280)}원</span>을
        <br />
        결제하기 위해
        <br />
        정보를 입력해 주세요
      </h2>
      <p className="card-subtitle">안전한 암호화 결제로 처리됩니다 🔒</p>

      <div className="section-tag">결제수단 선택</div>
      <div className="pay-tabs">
        {methods.map((m) => (
          <div
            key={m}
            className={`pay-tab ${state.payMethod === m ? 'active' : ''}`}
            onClick={() => actions.setField('payMethod', m)}
          >
            {m}
          </div>
        ))}
      </div>

      <div className="field-group">
        <div className="field-label">
          카드 소유자 <span className="required">*</span>
        </div>
        <input
          className="input filled"
          value={state.name}
          onChange={(e) => actions.setField('name', e.target.value)}
        />
      </div>

      <div className="field-group">
        <div className="field-label">
          카드번호 <span className="required">*</span>
        </div>
        <div className="card-input-group">
          {state.cardNumber.map((v, i) => (
            <input
              key={i}
              className="input filled"
              maxLength={4}
              value={v}
              onChange={(e) => actions.updateCard(i, e.target.value)}
              placeholder="****"
            />
          ))}
        </div>
      </div>

      <div className="field-group">
        <div className="field-label">
          유효기간 <span className="required">*</span>
        </div>
        <div className="input-row">
          <input className="input" placeholder="MM" maxLength={2} />
          <input className="input" placeholder="YY" maxLength={2} />
        </div>
      </div>

      <div className="field-group">
        <div className="field-label">
          카드 비밀번호 앞 2자리 <span className="required">*</span>
        </div>
        <input className="input" type="password" maxLength={2} placeholder="••" />
      </div>

      <div className="notice">
        🔐 입력한 정보는 결제 처리 용도로만 사용되며 저장되지 않습니다.
      </div>
    </div>
  )
}

export default Step8Payment