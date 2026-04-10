function formatNum(n) {
  return n.toLocaleString('ko-KR')
}

function BottomBar({ state, actions }) {
  if (state.step === 9) {
    return (
      <div className="bottom-bar">
        <div className="bottom-bar-inner">
          <button className="btn btn-primary" onClick={actions.goHome}>🏠 홈으로</button>
        </div>
      </div>
    )
  }

  let nextLabel = '다음'
  if (state.step === 5) nextLabel = '특약 정보 등록 →'
  if (state.step === 7) nextLabel = '결제 정보 입력 →'
  if (state.step === 8) nextLabel = `${formatNum(1042280)}원 결제`

  return (
    <div className="bottom-bar">
      <div className="bottom-bar-inner">
        {state.step > 1 && (
          <button className="btn btn-outline" style={{ maxWidth: 90 }} onClick={actions.prev}>
            ← 이전
          </button>
        )}
        <button className="btn btn-primary" onClick={actions.next}>{nextLabel}</button>
      </div>
    </div>
  )
}

export default BottomBar