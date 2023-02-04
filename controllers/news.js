import axios from "axios";
import { NEWS_API_KEY } from "../util/secret.js";
export const News = async (req, res) => {
  var date = new Date();
  const query = "agriculture";
  axios
    .get(
      `https://newsapi.org/v2/everything?q=${query}&from=${date}&sortBy=popularity&apiKey=${NEWS_API_KEY}`
    )
    .then((resp) => {
      //const { current, forecast } = resp.data
      //const { title, description, url, urlToImage } = resp.data.articles[0];
      const arr = [{}];
      for (let i = 3; i < Math.min(resp.data.articles.length, 20); i++) {
        arr[i] = {
          title: resp.data.articles[i - 2].title,
          //description: resp.data.articles[i].description,
          url: resp.data.articles[i - 2].url,
          urlToImage: resp.data.articles[i - 2].urlToImage,
        };
      }
      res.send(arr);
    });
};
