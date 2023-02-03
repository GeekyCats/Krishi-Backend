import * as dotenv from "dotenv";

dotenv.config();

export const PORT = parseInt(process.env.PORT) || 8000;
export const MONGO_URI = process.env.MONGO_URI;
export const SECRET_KEY = process.env.SECRET_KEY;
export const API_KEY = process.env.API_KEY;
