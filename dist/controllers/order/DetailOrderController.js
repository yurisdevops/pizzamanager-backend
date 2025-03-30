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
exports.DetailOrderController = void 0;
const DetailOrderService_1 = require("../../services/order/DetailOrderService");
class DetailOrderController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Obtendo o ID do pedido a partir dos parâmetros da query string
            const order_id = req.query.order_id;
            // Instanciando o serviço responsável por detalhar o pedido
            const detailOrderService = new DetailOrderService_1.DetailOrderService();
            // Executando o serviço para obter os detalhes do pedido
            const orders = yield detailOrderService.execute({ order_id });
            // Retornando os detalhes do pedido como resposta JSON
            res.json(orders);
            // Finalizando a execução do método
            return;
        });
    }
}
exports.DetailOrderController = DetailOrderController;
