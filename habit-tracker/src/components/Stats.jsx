const Stats = ({habits}) => {
    const completedHabitsAmount = habits.filter((el) => el.isToday).length
      
    return habits.length > 0 && (
        <div classNameName="stats-grid">
            <div classNameName="stat-card">
                <div classNameName="stat-value">{habits.length}</div>
                <div classNameName="stat-label">Active Habits</div>
            </div>
            <div classNameName="stat-card">
                <div classNameName="stat-value">{Math.round((completedHabitsAmount / habits.length)*100)}%</div>
                <div classNameName="stat-label">Completion Rate</div>
            </div>
            <div classNameName="stat-card">
                <div classNameName="stat-value">{habits.sort((a, b) => b.streak - a.streak)[0].streak}</div>
                <div classNameName="stat-label">Day Streak</div>
            </div>
        </div>
    )
}

export default Stats