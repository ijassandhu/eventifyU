import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRouter from "./routes/user.ts";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/user", userRouter);

app.get("/", (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: "working",
  });
});

app.listen(parseInt(process.env.PORT || "5000"), "127.0.0.1", () => {
  console.log(`Running server at localhost:${process.env.PORT}`);
});
