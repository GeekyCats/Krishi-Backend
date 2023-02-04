import axios from "axios";
import { NEWS_API_KEY } from "../util/secret.js";
export const News = async (req, res) => {
  var date = new Date();
  const { query } = req.body;
  axios
    .get(
      `https://newsapi.org/v2/everything?q=${query}&from=${date}&sortBy=popularity&apiKey=${NEWS_API_KEY}`
    )
    .then((resp) => {
      //const { current, forecast } = resp.data
      res.send(resp.data);
      //console.log(resp.data);
    });
};
