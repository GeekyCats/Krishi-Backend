import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { NextFunction } from "express";

import { SECRET_KEY } from "../util/secret.js";

export const verify = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).send("Unauthorized");
    const decoded = jwt.verify(token, SECRET_KEY);
    if (!decoded) return res.status(401).send("Unauthorized");
    if (!mongoose.Types.ObjectId.isValid(decoded.id))
      return res.status(400).send("Invalid ID");
    req.body.user = decoded.id;
  } catch {
    return res.status(401).send("Invalid token");
  }
  next();
};
