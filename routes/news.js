import express from "express";
import { News } from "../controllers/news.js";

const router = express.Router();

router.post("/", News);
router.get("/test", (req, res) => {
  res.send("API is working");
});

export default router;
