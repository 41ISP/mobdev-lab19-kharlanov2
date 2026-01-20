const TimelineItem = ({day, date, completed, complitionTime}) => {
    return(
         <div className="timeline-item">
                            <div className="timeline-date">
                                <div className="timeline-date-day">{day}</div>
                                <div className="timeline-date-full">
                                    {date}
                                </div>
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-status">
                                    <div className={`status-icon${completed ? ` completed` : ""}`}>
                                        {completed ? "✓" : "✗"}
                                    </div>
                                    <div>
                                        <div className={`status-text${completed ? ` completed` : ""}`}>
                                            {completed ? "Copmleted" : "Missed"}
                                        </div>
                                        <div className="timeline-note">
                                            Completed at {complitionTime}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}

export default TimelineItem