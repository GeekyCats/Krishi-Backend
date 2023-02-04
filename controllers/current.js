import axios from "axios";
import { WEATHER_API_KEY } from "../util/secret.js";
export const Current = async (req, res) => {
  const { location, days } = req.body;
  axios
    .get(
      `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${location}&days=${days}&aqi=no&alerts=yes`
    )
    .then((resp) => {
      const { current } = resp.data;
      const { temp_c, condition, humidity, precip_mm, last_updated } = current;
      const currentWeatherData = {
        temprature: temp_c,
        condition: condition,
        humidity: humidity,
        precipitation: precip_mm,
        time: last_updated,
      };

      res.send(currentWeatherData);
    });
};
