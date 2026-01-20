import { useEffect, useState } from "react"
import { getObject } from "../utils/storage"
import { checkCompleted, daysSince, formatDateShort, mapDays } from "../utils/utils"
import TimelineItem from "./TimeLineItem"

const DaysList = ({id}) => {
    const [habit, setHabit] = useState(undefined)
    const days = habit && daysSince(habit.startDate)
    console.log(days)
    useEffect(() => {
        const getHabit = async () => {
            const habits = await getObject
            ("habits")
            setHabit(habits.find((el) => el.id == id))
        }
        getHabit()
    }, [])
    return(
        <div className="list-view">
            {habit && mapDays(habit.startDate, (el) => <TimelineItem day={el.toLocaleDateString("en-US", {weekday: "long"})}
             date={formatDateShort(el)}
             completed={checkCompleted(el, habit.history)}/>
             
            )}
        </div>
    )
}
export default DaysList