import { Request, Response } from "express";
import pool from "../DBconn.ts";
import { matchedData, validationResult } from "express-validator";
import { hash } from "bcrypt";

type registerUser = {
  name: string;
  email: string;
  password: string;
  rollno?: number;
  phoneno?: string;
  class?: string;
};

const registrationArray = async (obj: registerUser) => [
  obj.name,
  obj.email,
  obj.rollno || null,
  await hash(obj.password, 10),
  obj.phoneno || null,
  obj.class || null,
];

export const registerUser = async (req: Request, res: Response) => {
  try {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const user = await pool.query(
        "INSERT INTO users (name, email, password, rollno, phoneno, class) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        await registrationArray(matchedData(req)),
      );
      if (user.rows)
        res.status(201).json({
          msg: "hello",
        });
    } else res.status(400).json(result.array());
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export const hello = (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "hello",
  });
};
