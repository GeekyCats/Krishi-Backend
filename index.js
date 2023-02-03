import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import { PORT, MONGO_URI } from "util/secrets.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("WELCOME TO KRISHI!");
});

app.use("/account", userRoutes);

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
