import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import { PORT, MONGO_URI } from "./util/secret.js";
import userRoutes from "./routes/user.js";
import weatherRoutes from "./routes/weatherForecast.js";
import newsRoutes from "./routes/news.js";
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("WELCOME TO KRISHI BACKEND!");
});

app.use("/account", userRoutes);
app.use("/weather", weatherRoutes);
app.use("/news", newsRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error);
  });
