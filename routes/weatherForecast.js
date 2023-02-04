import express from "express";
import { Forecast } from "../controllers/forecast.js";
import { Current } from "../controllers/current.js";

const router = express.Router();

router.post("/forecast", Forecast);
router.post("/current", Current);
router.get("/test", (req, res) => {
  res.send("API is working");
});

export default router;
