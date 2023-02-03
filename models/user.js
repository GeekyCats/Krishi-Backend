import { mongoose, Schema, model } from "mongoose";

const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String },
  },
  { versionKey: false }
);

export default mongoose.model("User", User);
