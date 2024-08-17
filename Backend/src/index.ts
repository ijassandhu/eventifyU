import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Router from "./routes/test.ts";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

app.get("/", (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: "working",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Running server at localhost:${process.env.PORT}`);
});
