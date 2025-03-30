import crypto from "crypto";
import multer from "multer";

import { extname, resolve } from "path"; // Métodos da biblioteca de manipulação de caminhos para lidar com caminhos de diretórios

export default {
  // Função principal que retorna a configuração do Multer para uploads
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        // Define o diretório onde os arquivos serão armazenados
        destination: resolve(__dirname, "..", "..", folder), // O caminho absoluto é gerado com base no diretório fornecido

        // Define o nome do arquivo armazenado no servidor
        filename: (request, file, callback) => {
          /* Gera um hash aleatório de 16 bytes convertido em uma string hexadecimal.
             Isso cria um identificador único para o arquivo, evitando conflitos
             caso dois arquivos com o mesmo nome sejam enviados. */
          const filaHash = crypto.randomBytes(16).toString("hex");

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
