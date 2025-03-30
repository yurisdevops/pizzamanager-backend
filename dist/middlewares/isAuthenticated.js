"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = isAuthenticated;
const jsonwebtoken_1 = require("jsonwebtoken");
// Middleware para verificar se o usuário está autenticado
function isAuthenticated(req, res, next) {
    // Recupera o token de autenticação enviado no cabeçalho da requisição
    const authToken = req.headers.authorization;
    // Valida se o cabeçalho de autenticação está presente. A ausência do token implica que o usuário não está autenticado.
    if (!authToken) {
        res.status(401).end(); // Retorna status HTTP 401 (não autorizado) e encerra a resposta
        return; // Importante: o return previne que o código continue executando caso o token esteja ausente
    }
    // Divide o valor do cabeçalho para separar "Bearer" do token em si
    const [, token] = authToken.split(" ");
    try {
        // Utiliza a função "verify" para validar o token. O "verify" analisa sua integridade e decodifica o payload.
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        /* Caso o token seja válido, o ID do usuário, contido no campo "sub", é recuperado.
           Este ID é atribuído a `req.user_id` para facilitar o acesso em controladores futuros. */
        req.user_id = sub;
        // Chama o próximo middleware ou controlador, permitindo que a requisição continue fluindo
        next();
    }
    catch (error) {
        // Se o token não for válido ou expirou, um erro será capturado aqui
        res.status(401).end(); // Retorna status HTTP 401 (não autorizado) e encerra a resposta
        return; // O "return" garante que o código não continue a execução em caso de erro
    }
}
