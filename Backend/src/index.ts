import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import cors from 'cors';
// import dotenv from 'dotenv';

const app = express();

// dotenv.config({path: './env'})

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (_req: Request, res:Response) => {
  res.json({
    success: true,
    message: "working",
  });
});

app.listen(5000, () => {
  console.log(`Running server at localhost:5000`);
});
