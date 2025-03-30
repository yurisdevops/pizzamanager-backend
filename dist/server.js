"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
// Middleware que permite o uso de JSON nas requisições
app.use(express_1.default.json());
// Middleware que habilita o CORS (Cross-Origin Resource Sharing) para permitir que diferentes origens acessem a API
app.use((0, cors_1.default)());
// Middleware para configurar o upload de arquivos, com limite de tamanho de 50 MB
app.use((0, express_fileupload_1.default)({
    limits: { fileSize: 50 * 1024 * 1024 }, // Define o limite de tamanho dos arquivos em 50 MB
}));
// Middleware que adiciona todas as rotas definidas no arquivo de rotas
app.use(routes_1.router);
// Middleware para servir arquivos estáticos a partir do diretório "tmp"
app.use("/files", express_1.default.static(path_1.default.resolve(__dirname, "..", "tmp")));
// Middleware para tratamento de erros na aplicação
app.use((err, req, res, next) => {
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
