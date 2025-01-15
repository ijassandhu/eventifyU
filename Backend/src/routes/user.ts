import express from "express";
import {
  validateClass,
  validateEmail,
  validatePassword,
  validatePhoneno,
  validateRollNo,
  validateName,
  validateId,
} from "../utils/validation.ts";
import { getUser, loginUser, registeredUser } from "../controller/user.ts";

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
  registeredUser,
);
Router.put("/", [
  validateName,
  validateClass,
  validateEmail,
  validateRollNo,
  validatePhoneno,
  validatePassword,
]);
Router.get("/:id",[validateId], getUser);
Router.post("/login",[validateEmail, validatePassword],loginUser);

export default Router;
