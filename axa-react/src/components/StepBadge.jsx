function StepBadge({ n, label }) {
  return (
    <div className="step-badge">
      <span className="num">{n}</span>
      {label}
    </div>
  )
}

export default StepBadge