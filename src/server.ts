import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import path from "path";
import fileUpload from "express-fileupload";

import { router } from "./routes";

const app = express();

// Middleware que permite o uso de JSON nas requisições
app.use(express.json());

// Middleware que habilita o CORS (Cross-Origin Resource Sharing) para permitir que diferentes origens acessem a API
app.use(cors());

// Middleware para configurar o upload de arquivos, com limite de tamanho de 50 MB
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }, // Define o limite de tamanho dos arquivos em 50 MB
  })
);

// Middleware que adiciona todas as rotas definidas no arquivo de rotas
app.use(router);

// Middleware para servir arquivos estáticos a partir do diretório "tmp"
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

// Middleware para tratamento de erros na aplicação
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    // Retorna status 400 para erros conhecidos (por exemplo, validações de entrada)
    res.status(400).json({
      error: err.message,
    });
  }

  // Retorna status 500 para erros inesperados, indicando falhas no servidor
  res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

// Inicializa o servidor na porta 3333
app.listen(process.env.PORT, () => {
  console.log("Servidor ONLINE"); // Mensagem exibida no console ao iniciar o servidor
});
