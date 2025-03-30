"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const multer_1 = __importDefault(require("multer"));
const path_1 = require("path"); // Métodos da biblioteca de manipulação de caminhos para lidar com caminhos de diretórios
exports.default = {
    // Função principal que retorna a configuração do Multer para uploads
    upload(folder) {
        return {
            storage: multer_1.default.diskStorage({
                // Define o diretório onde os arquivos serão armazenados
                destination: (0, path_1.resolve)(__dirname, "..", "..", folder), // O caminho absoluto é gerado com base no diretório fornecido
                // Define o nome do arquivo armazenado no servidor
                filename: (request, file, callback) => {
                    /* Gera um hash aleatório de 16 bytes convertido em uma string hexadecimal.
                       Isso cria um identificador único para o arquivo, evitando conflitos
                       caso dois arquivos com o mesmo nome sejam enviados. */
                    const filaHash = crypto_1.default.randomBytes(16).toString("hex");
                    /* Combina o hash gerado com o nome original do arquivo.
                       Isso garante que o arquivo possa ser identificado facilmente,
                       ao mesmo tempo que evita duplicações. */
                    const fileName = `${filaHash}-${file.originalname}`;
                    // Passa o nome gerado para o callback do Multer para armazenar o arquivo
                    return callback(null, fileName);
                },
            }),
        };
    },
};
