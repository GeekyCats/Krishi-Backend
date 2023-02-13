import axios from "axios";
import { WEATHER_API_KEY } from "../util/secret.js";
export const Current = async (req, res) => {
  const { lat,long } = req.body;
  axios
    .get(
      `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${lat},${long}`
    )
    .then((resp) => {
      const { current } = resp.data;
      const { temp_c, condition, humidity, precip_mm } = current;
      const currentWeatherData = {
        temprature: temp_c,
        icon_url: condition.icon,
        humidity: humidity,
        precipitation: precip_mm,
      };

      res.send(currentWeatherData);
    });
};
