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
exports.AuthUserController = void 0;
const AuthUserService_1 = require("../../services/user/AuthUserService");
class AuthUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Extraindo o e-mail e a senha a partir do corpo da requisição
            const { email, password } = req.body;
            // Instanciando o serviço responsável por autenticar o usuário
            const authUserService = new AuthUserService_1.AuthUserService();
            // Executando o serviço de autenticação, passando o e-mail e a senha
            const auth = yield authUserService.execute({
                email,
                password,
            });
            // Retornando os dados de autenticação como resposta JSON
            res.json(auth);
        });
    }
}
exports.AuthUserController = AuthUserController;
