function VehicleCard({ vehicle, selected, onClick }) {
  return (
    <div className={`vehicle-card ${selected ? 'selected' : ''}`} onClick={onClick}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
        <span className="vehicle-emoji">{vehicle.emoji}</span>
      </div>
      <div className="vehicle-info">
        <div className="vehicle-plate">{vehicle.plate}</div>
        <div className="vehicle-name">{vehicle.name}</div>
        <div className="vehicle-date">{vehicle.date}</div>
      </div>
      <div style={{ color: 'var(--axa-navy)', fontSize: 20, marginLeft: 'auto' }}>
        {selected ? '✓' : ''}
      </div>
    </div>
  )
}

export default VehicleCard