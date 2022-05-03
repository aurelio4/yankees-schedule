import React from 'react'
import ScheduleCalendar from "./components/ScheduleCalendar";

import MLBApi from './api/index'

const App = () => {
    let api = new MLBApi()
    api.getGamesForCurrentMonth()

    return (
      <div>
        <ScheduleCalendar />
      </div>
    );
}

export default App