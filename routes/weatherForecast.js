import express from "express";
import { Forecast } from "../controllers/forecast.js";

const router = express.Router();

router.post("/forecast", Forecast);
router.get("/test", (req, res) => {
  res.send("API is working");
});

export default router;
