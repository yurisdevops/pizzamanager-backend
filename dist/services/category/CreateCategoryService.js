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
exports.CreateCategoryService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
// Classe do serviço responsável por criar uma nova categoria
class CreateCategoryService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name }) {
            // Validação para garantir que o nome da categoria não seja vazio
            if (name === " ") {
                throw new Error("Category name cannot be empty");
            }
            // Utilizando o Prisma Client para criar uma nova categoria no banco de dados
            const category = yield prisma_1.default.category.create({
                data: {
                    name: name, // Define o nome da nova categoria
                },
                select: {
                    id: true, // Retorna o ID da categoria criada
                    name: true, // Retorna o nome da categoria criada
                },
            });
            // Retorna os dados da categoria criada
            return category;
        });
    }
}
exports.CreateCategoryService = CreateCategoryService;
