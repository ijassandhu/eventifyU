import { NextFunction, Request, Response } from "express";
import pool from "../DBconn.ts";

class customError extends Error {
  code: number;
  constructor(code: number) {
    super("");
    this.code = code || 0;
  }
}

export const asyncErrorHandler =
  (passedFunction: (req: Request, res: Response, next?: NextFunction) => any) =>
    (req: Request, res: Response, next?: NextFunction) =>
      Promise.resolve(passedFunction(req, res, next)).catch(next);

export const DBquery = (query: string, data: [any]) =>
  Promise.resolve(pool.query(query, data));

export default customError;
