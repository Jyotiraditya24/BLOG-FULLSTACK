import userModel from "../model/User.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      userName: userName,
      email: email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const login = async (req,res)=>{
    try {
        const {email,password} = req.body;
    } catch (error) {
      res.status(500).json({ error });
    }
}
