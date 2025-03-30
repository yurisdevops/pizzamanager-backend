"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const cloudinary_1 = require("cloudinary");
const CreateProductService_1 = require("../../services/product/CreateProductService");
// Configurações do Cloudinary usando variáveis de ambiente para autenticação
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
// Função assíncrona para enviar o arquivo ao Cloudinary
function uploadFileToCloudinary(file) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            // Cria um stream para enviar o arquivo ao Cloudinary
            cloudinary_1.v2.uploader
                .upload_stream({ folder: "products" }, (error, result) => {
                // Callback para verificar se houve erro ou sucesso
                if (error) {
                    reject(error); // Rejeita a Promise em caso de erro
                }
                else {
                    resolve(result); // Retorna o resultado do upload
                }
            })
                .end(file.data); // Envia os dados do arquivo para o Cloudinary
        });
    });
}
class CreateProductController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, price, description, category_id } = req.body;
                const createProductService = new CreateProductService_1.CreateProductService();
                // Verifica se há arquivos anexados na requisição
                if (!req.files || Object.keys(req.files).length === 0) {
                    console.error("Nenhum arquivo enviado:", req.files);
                    throw new Error("Erro ao enviar o arquivo");
                }
                // Obtém o arquivo enviado, verifica sua validade
                const file = req.files["file"];
                if (!file || Array.isArray(file)) {
                    console.error("Arquivo mal formado ou não encontrado");
                    throw new Error("Arquivo inválido");
                }
                const uploadedFile = file;
                // Faz upload do arquivo ao Cloudinary e captura o resultado
                const resultFile = yield uploadFileToCloudinary(uploadedFile);
                // Cria o produto com os dados fornecidos e a URL da imagem carregada
                const product = yield createProductService.execute({
                    name,
                    price,
                    description,
                    category_id,
                    banner: resultFile.url, // Usa a URL retornada do Cloudinary como banner do produto
                });
                res.status(201).json(product);
            }
            catch (error) {
                console.error("Erro ao processar requisição:", error);
                res.status(500).json({ error: "Erro interno no servidor" });
            }
        });
    }
}
exports.CreateProductController = CreateProductController;
