import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { SECRET_KEY } from "../util/secret";
import User from "../models/user";

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(404)
        .json({ message: "Email not registered, try signing up" });
    const isCorrect = await bcrypt.compare(password, user.password);
    if (!isCorrect)
      return res.status(400).json({ message: "Username or password invalid" });
    const token = jwt.sign({ email, id: user._id }, SECRET_KEY, {
      noTimestamp: true,
    });
    res.status(200).json({ result: user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Signin failed" });
  }
};

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      res.status(400).json({ message: "Email already registered" });
    const encryptedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      name,
      email,
      password: encryptedPassword,
    });
    const token = jwt.sign({ email, id: user._id }, SECRET_KEY, {
      noTimestamp: true,
    });
    await createDefaultCategories(user._id);
    res.status(200).json({ result: user, token });
  } catch (error) {
    res.status(500).json({ message: "Signup failed" });
  }
};
