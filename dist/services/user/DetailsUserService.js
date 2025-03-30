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
exports.DetailsUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
// Classe do serviço responsável por obter os detalhes de um usuário
class DetailsUserService {
    execute(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            // Busca no banco de dados o usuário que corresponde ao ID fornecido
            const user = yield prisma_1.default.user.findFirst({
                where: {
                    id: user_id, // Filtra pelo ID do usuário
                },
                select: {
                    id: true, // Retorna o ID do usuário
                    name: true, // Retorna o nome do usuário
                    email: true, // Retorna o e-mail do usuário
                },
            });
            // Retorna os detalhes do usuário encontrado
            return user;
        });
    }
}
exports.DetailsUserService = DetailsUserService;
