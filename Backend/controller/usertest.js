import { compare, hash } from "bcrypt";
import { matchedData, validationResult } from "express-validator";
import User from "../models/testuser.js";
import jwt from 'jsonwebtoken'

export const userTestRegister = async (req, res) => {
  try {
    const result = validationResult(req);
    if (result.isEmpty()) {
      let data = matchedData(req);
      data.password = await hash(data.password, 10);
      const user = await User.create(data);
      res
        .status(201)
        .json({ success: true, message: "Registered Successfully" });
    } else res.status(400).json({ success: false, message: result.array() });
  } catch (err) {
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" });
    console.error(err);
  }
};

export const userTestLogin = async(req, res) =>{
  try {
    const result = validationResult(req);
    if (result.isEmpty()) {
      let {email, password} = matchedData(req);
      const user = await User.findOne({email});
      if (!user) return res.status(400).json({
        success: false,
        message: "NO user found"
      });
      if (!(await compare(password, user.password))) return res.status(400).json({
        success: false,
        message: 'Invalid password or email'
      });
      res.status(200).json({
        success: true,
        _id: jwt.sign({_id: user._id},'jalsjdhfkjasdflafdhkj')
      });
    } else res.status(400).json({ success: false, message: result.array() });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'INTERNAL SERVER ERROR'
    })
  }
}
