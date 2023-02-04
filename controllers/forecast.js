import axios from "axios";
import { WEATHER_API_KEY } from "../util/secret.js";
export const Forecast = async (req, res) => {
  const { location, days } = req.body;
  axios
    .get(
      `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${location}&days=${days}&aqi=no&alerts=yes`
    )
    .then((resp) => {
      const response = resp.data;
      const result = response.forecast.forecastday;
      const dataForPrediction = [{}];
      for (let i = 0; i < days; i++) {
        dataForPrediction[i] = {
          date: result[i].date,
          maxtemp_c: result[i].day.maxtemp_c,
          mintemp_c: result[i].day.mintemp_c,
          avgtemp_c: result[i].day.avgtemp_c,
          maxwind_kph: result[i].day.maxwind_kph,
          totalprecip_mm: result[i].day.totalprecip_mm,
          avgvis_km: result[i].day.avgvis_km,
          avghumidity: result[i].day.avghumidity,
          uv: result[i].day.uv,
          condition: result[i].day.condition.text,
        };
      }
      res.send(dataForPrediction);
    });
};
