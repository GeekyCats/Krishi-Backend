import axios from "axios";
import { NEWS_API_KEY } from "../util/secret.js";
export const News = async (req, res) => {
  axios
    .get(
      `https://newsapi.org/v2/everything?q=agriculture&from=2023-01-03&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
    )
    .then((resp) => {
      //const { current, forecast } = resp.data;
      res.send(resp.data);
      //console.log(resp.data);
    });
};
