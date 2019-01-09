import axios from "axios";

const API_KEY = "048937bef9ece21cd6857a7596845353";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},uk`;
  const request = axios.get(url);

  return {
    type: "FETCH_WEATHER",
    payload: request
  };
}
