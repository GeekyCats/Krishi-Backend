import axios from "axios";
import { API_KEY } from "../util/secret.js";
export const Forecast = async (req, res) => {
  const { location, days } = req.body;
  axios
    .get(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=${days}&aqi=no&alerts=yes`
    )
    .then((resp) => {
      const { current, forecast } = resp.data;
      res.send(current);
      //console.log(resp.data);
    });
};
