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
exports.CreateUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
// Classe do serviço responsável por criar um novo usuário
class CreateUserService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, name, password }) {
            // Verifica se o e-mail foi fornecido
            if (!email) {
                throw new Error("Email is required"); // Lança um erro caso o e-mail esteja ausente
            }
            // Verifica se o e-mail já está cadastrado no banco de dados
            const userAlreadyExists = yield prisma_1.default.user.findFirst({
                where: {
                    email: email, // Filtra pelo e-mail fornecido
                },
            });
            if (userAlreadyExists) {
                throw new Error("Email already exists"); // Lança um erro caso o e-mail já esteja registrado
            }
            // Criptografa a senha utilizando o bcrypt
            const hashedPassword = yield (0, bcryptjs_1.hash)(password, 8);
            // Cria um novo usuário no banco de dados com os dados fornecidos
            const user = yield prisma_1.default.user.create({
                data: {
                    name: name, // Define o nome do usuário
                    email: email, // Define o e-mail do usuário
                    password: hashedPassword, // Define a senha criptografada do usuário
                },
                select: {
                    id: true, // Retorna o ID do usuário criado
                    name: true, // Retorna o nome do usuário criado
                    email: true, // Retorna o e-mail do usuário criado
                    password: false, // Esconde a senha na resposta
                },
            });
            // Retorna os dados do usuário criado
            return user;
        });
    }
}
exports.CreateUserService = CreateUserService;
