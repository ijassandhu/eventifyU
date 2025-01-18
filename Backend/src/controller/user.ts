import { Request, Response } from "express";
import pool from "../DBconn.ts";
import { matchedData, validationResult } from "express-validator";
import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";
import customError, { asyncErrorHandler } from "../utils/errorHandlers.ts";
import { userFilter } from "../utils/filterdata.ts";

type registeredUser = {
  username: string;
  email: string;
  userpassword: string;
  rollno?: number;
  phoneno?: string;
  userclass?: string;
};

const registrationArray = async (obj: registeredUser) => [
  obj.username,
  obj.email,
  await hash(obj.userpassword, 10),
  obj.rollno || null,
  obj.phoneno || null,
  obj.userclass || null,
];

export const registeredUser = asyncErrorHandler(
  async (req: Request, res: Response) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const user = await pool.query(
        "INSERT INTO users (username, email, userpassword, rollno, phoneno, userclass) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        await registrationArray(matchedData(req)),
      );
      if (user.rows) res.status(201).json(userFilter(user.rows[0]));
    } else res.status(400).json(result.array());
  },
);

export const loginUser = asyncErrorHandler(
  async (req: Request, res: Response) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const { email, userpassword } = matchedData(req);
      const user = await pool.query(
        "SELECT id, username, email, userpassword, rollno, phoneno, userclass FROM users WHERE email = $1",
        [email],
      );
      if (!user.rows) throw new customError(404);
      if (!(await compare(userpassword, user.rows[0].userpassword)))
        throw new customError(401);
      res.status(200).json(userFilter(user.rows[0]));
    } else res.status(400).json(result.array());
  },
);

export const getUser = asyncErrorHandler(async (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    const user = await pool.query(
      "SELECT id, username, email, userpassword, rollno, phoneno, userclass FROM users WHERE id = $1",
      [
        jwt.verify(
          matchedData(req).id as string,
          process.env.authSecret as string,
        ),
      ],
    );
    if (!user.rowCount) throw new customError(404);
    res.status(200).json(userFilter(user.rows[0]));
  } else res.status(400).json(result.array());
});
