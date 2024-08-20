import express from "express";
import {
  validateClass,
  validateEmail,
  validatePassword,
  validatePhoneno,
  validateRollNo,
  validateName,
} from "../utils/validation.ts";
import { hello, registerUser } from "../controller/user.ts";

const Router = express.Router();

Router.post(
  "/",
  [
    validateName,
    validateClass,
    validateEmail,
    validateRollNo,
    validatePhoneno,
    validatePassword,
  ],
  registerUser,
);
Router.put("/");
Router.get("/");
Router.delete("/");
Router.get("/hello", hello);

export default Router;
