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
exports.ListByCategoryController = void 0;
const ListByCategoryService_1 = require("../../services/product/ListByCategoryService");
class ListByCategoryController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Obtendo o ID da categoria a partir dos parâmetros da query string
            const category_id = req.query.category_id;
            // Instanciando o serviço responsável pela lógica de listagem
            const listByCategoryService = new ListByCategoryService_1.ListByCategoryService();
            // Chamando o método execute do serviço para buscar os produtos da categoria fornecida
            const products = yield listByCategoryService.execute({ category_id });
            // Retornando a lista de produtos como uma resposta JSON
            res.json(products);
        });
    }
}
exports.ListByCategoryController = ListByCategoryController;
