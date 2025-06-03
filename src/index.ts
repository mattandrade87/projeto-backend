import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// GET /api/hello
app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Olá, mundo!" });
});

// POST /api/echo
app.post("/api/echo", (req: Request, res: Response) => {
  const { nome } = req.body;
  res.json({ resposta: `Você enviou: ${nome}` });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
