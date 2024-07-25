import express from "express";
import mongoose from "mongoose";
import userTestRouter from './routes/testuser.js'
import cors from 'cors'

mongoose
  .connect("mongodb+srv://user32:cZ3BdjU8vx58ZCZk@cluster0.ga94zcw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { dbName: "Test" })
  .then(() => console.log("db connected"))
  .catch((err) => console.error(err));

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())
app.use('/user',userTestRouter);

app.get("/", (req, res) => {
  res.send("<h1>Working</h1>");
});

app.listen(5000, () => {
  console.log("Running");
});
