import axios from "axios"

export default class MLBApi {
    constructor() {
        // url for 1 month of games
        // https://statsapi.mlb.com/api/v1/schedule/games/?sportId=1&startDate=2021-05-02&endDate=2021-05-31
      this.url = "https://statsapi.mlb.com/api/v1"
    }

    getGamesForCurrentMonth() {
        let scheduleApi = "/schedule/games/?sportId=1&"
        let dateAddition = ""

        let date = new Date()
        let firstDayOfCurrentMonth = `${date.getFullYear()}-${date.getMonth() + 1}-01`
        let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
        let lastDaySplit = lastDay.toString().split(' ')
        let lastDayOfCurrentMonth = `${lastDaySplit[3]}-${date.getMonth() + 1}-${lastDaySplit[2]}`

        dateAddition = `startDate=${firstDayOfCurrentMonth}&endDate=${lastDayOfCurrentMonth}`

        axios.get(this.url + scheduleApi + dateAddition)
            .then(res => {
                return res.data.dates
            })
            .catch(err => {
                console.error(err)
            })
    }
}