const HabitForm = ({ form, handleFormChange, handleFormSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        handleFormSubmit()
    }

    return (
        <div classNameName="add-habit-section">
            <h2>➕ Add New Habit</h2>
            <form onSubmit={handleSubmit} classNameName="form-grid">
                <div classNameName="form-group">
                    <label for="habit-name">Habit Name</label>
                    <input
                        onChange={handleFormChange}
                        type="text"
                        value={form.habitName}
                        id="habit-name"
                        name="habitName"
                        placeholder="e.g., Morning Exercise"
                    />
                </div>

                <div classNameName="form-row">
                    <div classNameName="form-group">
                        <label for="frequency">Frequency</label>
                        <select
                            id="frequency"
                            name="frequency"
                            onChange={handleFormChange}

                            value={form.frequency}>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="weekdays">Weekdays</option>
                            <option value="weekdends">Weekends</option>
                        </select>
                    </div>

                    <div classNameName="form-group">
                        <label for="notification-time">
                            Notification Time
                        </label>
                        <input
                            type="time"
                            name="notificationTime"
                            id="notification-time"
                            onChange={handleFormChange}
                            value={form.notificationTime} />
                    </div>
                </div>

                <div classNameName="form-group">
                    <label>Color Theme</label>
                    <div classNameName="color-picker">
                        <div
                        ></div>
                        <div
                            classNameName="color-option"
                        ></div>
                        <div
                            classNameName="color-option"
                        ></div>
                        <div
                            classNameName="color-option"
                        ></div>
                        <div
                            classNameName="color-option"
                        ></div>
                        <div
                            classNameName="color-option"
                        ></div>
                    </div>
                </div>

                <button type="submit" classNameName="btn btn-primary">
                    Add Habit
                </button>
            </form>
        </div>
    )
}

export default HabitForm