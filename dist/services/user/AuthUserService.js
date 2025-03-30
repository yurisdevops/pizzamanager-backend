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
exports.AuthUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthUserService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password }) {
            // Verifica se o e-mail existe no banco de dados
            const user = yield prisma_1.default.user.findFirst({
                where: {
                    email: email, // Filtra pelo e-mail fornecido
                },
            });
            if (!user) {
                // Lança um erro caso o e-mail não seja encontrado
                throw new Error("User/password incorrect");
            }
            // Compara a senha fornecida com a senha armazenada no banco de dados
            const passwordMath = yield (0, bcryptjs_1.compare)(password, user.password);
            if (!passwordMath) {
                // Lança um erro caso a senha esteja incorreta
                throw new Error("User/password incorrect");
            }
            // Gera um token JWT com os dados do usuário autenticado
            const token = (0, jsonwebtoken_1.sign)({
                name: user.name, // Nome do usuário
                email: user.email, // E-mail do usuário
            }, process.env.JWT_SECRET, // Chave secreta do JWT, definida nas variáveis de ambiente
            {
                subject: user.id, // ID do usuário como identificador no token
                expiresIn: "30d", // Define o tempo de expiração do token para 30 dias
            });
            // Retorna os dados do usuário autenticado junto com o token gerado
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                token: token,
            };
        });
    }
}
exports.AuthUserService = AuthUserService;
