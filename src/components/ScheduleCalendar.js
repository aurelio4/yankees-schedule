import { Calendar } from "antd"
import React from 'react'
import moment from "moment"

const ScheduleCalendar = () => {
    let firstDay = moment().year('2022').month('04').date('01')
    let lastDay = moment().year('2022').month('04').date('32')
    return (
        <div>
            <Calendar
                date={}
                fullscreen={true}
                validRange={[firstDay, lastDay]} />
        </div>
    )
}

export default ScheduleCalendar;