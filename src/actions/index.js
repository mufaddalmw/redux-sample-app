
const API_KEY = '042ed0499567e3deeeb90e82853376c2'
const ROOT_URL = `http://openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`
    const request = axios.get(url)
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}