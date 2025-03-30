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
exports.RemoveItemController = void 0;
const RemoveItemService_1 = require("../../services/order/RemoveItemService");
class RemoveItemController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Obtendo o ID do item a ser removido a partir dos parâmetros da query string
            const item_id = req.query.item_id;
            // Instanciando o serviço responsável por remover o item
            const removeItemService = new RemoveItemService_1.RemoveItemService();
            // Executando o serviço para remover o item, passando o ID do item
            const item = yield removeItemService.execute({
                item_id,
            });
            // Retornando o item removido ou a confirmação como resposta JSON
            res.json(item);
        });
    }
}
exports.RemoveItemController = RemoveItemController;
