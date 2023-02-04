import axios from "axios";
import { WEATHER_API_KEY } from "../util/secret.js";
export const Forecast = async (req, res) => {
  const { location, days } = req.body;
  axios
    .get(
      `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${location}&days=${days}&aqi=no&alerts=yes`
    )
    .then((resp) => {
      const { forecast } = resp.data;
      res.send(forecast);
      //console.log(resp.data);
    });
};
