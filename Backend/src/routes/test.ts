import express, { Request, Response } from "express";
import pool from "../DBconn";

const Router = express.Router();

Router.get("/test", (_req: Request, res: Response) => {
  pool.query("select * from users", (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result.rows);
  });
});

export default Router;
