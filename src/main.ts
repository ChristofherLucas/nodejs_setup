import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.listen(3000);

app.get("/", function (req: Request, res: Response) {
  res.json("Hello World!").status(200);
  res.end();
});
