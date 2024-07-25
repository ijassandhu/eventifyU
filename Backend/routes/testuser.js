import express from "express";
import { body } from "express-validator";
import { userTestLogin, userTestRegister } from "../controller/usertest.js";

const Router = express.Router();

Router.post("/register",[body('email').trim().isEmail(), body('password').isLength({min: 8}).withMessage('length should be eight').isString().withMessage('password should be string')], userTestRegister);

Router.post('/login', [body('email').trim().isEmail(), body('password').isLength({min: 8}).withMessage('length should be eight').isString().withMessage('password should be string')], userTestLogin);

export default Router;