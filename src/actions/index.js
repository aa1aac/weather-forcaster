import axios from 'axios'

const API_KEY='33304419eb12d71978d77a1442f2390a'

const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?mode=json&appid=${API_KEY}`
export const FETCH_WEATHER ='FETCH_WEATHER'
export const fetchWeather =(city)=>{
    const url = `${ROOT_URL}&q=${city}`
    const request =axios.get(url)

    console.log('Request:',request)
    return {
        type:FETCH_WEATHER,
        payload:request
    }
}