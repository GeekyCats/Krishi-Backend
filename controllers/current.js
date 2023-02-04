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
      res.send(current);
      //console.log(resp.data);
    });
};
