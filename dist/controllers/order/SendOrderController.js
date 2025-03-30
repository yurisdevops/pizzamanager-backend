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
exports.SendOrderController = void 0;
const SendOrderService_1 = require("../../services/order/SendOrderService");
class SendOrderController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Extraindo o ID do pedido a partir do corpo da requisição
            const { order_id } = req.body;
            // Instanciando o serviço responsável por enviar o pedido
            const sendOrderService = new SendOrderService_1.SendOrderService();
            // Executando o serviço para enviar o pedido, passando o ID do pedido
            const order = yield sendOrderService.execute({
                order_id,
            });
            // Retornando o pedido enviado como resposta JSON
            res.json(order);
        });
    }
}
exports.SendOrderController = SendOrderController;
