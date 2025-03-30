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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
// Classe do serviço responsável pela criação de um novo produto
class CreateProductService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ banner, category_id, description, name, price, }) {
            // Criando o produto no banco de dados usando o Prisma Client
            const product = prisma_1.default.product.create({
                data: {
                    name, // Define o nome do produto
                    price, // Define o preço do produto
                    description, // Define a descrição do produto
                    banner, // Define a URL do banner do produto
                    category_id, // Define a categoria associada ao produto
                },
            });
            // Retorna os dados do produto criado
            return product;
        });
    }
}
exports.CreateProductService = CreateProductService;
