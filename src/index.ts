import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("API Event Manager Online")
});

app.listen(port,() =>{
  console.log(`Servidor rodando na porta ${port}`);
})