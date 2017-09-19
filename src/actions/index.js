import axios from "axios";

const API_KEY = "";

//  http://api.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&units=metric&lang=en&appid=
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const URL_PARAMS = `&units=metric&lang=en`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(cityName) {
  const url = `${ROOT_URL}&q=${cityName}${URL_PARAMS}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

