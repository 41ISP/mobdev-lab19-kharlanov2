const HabitCard = ({onClick, name, notificationTime, frequency, color, isToday, streak, toggleToday}) => {
    return (
        <div classNameName="habit-card">
                    <div classNameName="habit-info" onClick={onClick}>
                        <div classNameName="habit-name">{name}</div>
                        <div classNameName="habit-meta">
                            <div classNameName="habit-meta-item">
                                <span>⏰</span>
                                <span>{notificationTime}</span>
                            </div>
                            <div classNameName="habit-meta-item">
                                <span>📅</span>
                                <span>{frequency}</span>
                            </div>
                        </div>
                    </div>
                    <div classNameName="habit-actions">
                        <div classNameName="streak-badge">🔥 {streak} days</div>
                        <button onClick={toggleToday} classNameName={`check-btn${isToday ? " completed" : ""}`}>{isToday ? "✓" : "○"}</button>
                    </div>
                </div>
    )
}

export default HabitCard