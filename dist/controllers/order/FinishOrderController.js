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
exports.FinishOrderController = void 0;
const FinishOrderService_1 = require("../../services/order/FinishOrderService");
class FinishOrderController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Extraindo o ID do pedido a partir do corpo da requisição
            const { order_id } = req.body;
            // Instanciando o serviço responsável por finalizar o pedido
            const finishOrderService = new FinishOrderService_1.FinishOrderService();
            // Executando o serviço para finalizar o pedido, passando o ID do pedido
            const order = yield finishOrderService.execute({ order_id });
            // Retornando o pedido finalizado como uma resposta JSON
            res.json(order);
        });
    }
}
exports.FinishOrderController = FinishOrderController;
