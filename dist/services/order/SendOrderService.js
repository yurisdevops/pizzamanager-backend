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
exports.SendOrderService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
// Classe do serviço responsável por enviar um pedido
class SendOrderService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ order_id }) {
            // Atualiza o pedido no banco de dados para indicar que ele não é mais um rascunho
            const order = yield prisma_1.default.order.update({
                where: {
                    id: order_id, // Filtra o pedido pelo ID fornecido
                },
                data: {
                    draft: false, // Define o pedido como "enviado" (não mais um rascunho)
                },
            });
            // Retorna os dados do pedido atualizado
            return order;
        });
    }
}
exports.SendOrderService = SendOrderService;
