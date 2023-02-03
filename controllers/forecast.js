import axios from "axios";
export const Forecast = async (req, res) => {
  const { location, days } = req.body;
  axios
    .get(
      `https://api.weatherapi.com/v1/forecast.json?key=508c065f49d9489c94d202827230302&q=${location}&days=${days}&aqi=no&alerts=yes`
    )
    .then((resp) => {
      const { current, forecast } = resp.data;
      res.send(resp.data);
      //console.log(resp.data);
    });
};
