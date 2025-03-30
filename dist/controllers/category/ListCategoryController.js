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
exports.ListCategoryController = void 0;
const ListCategoryService_1 = require("../../services/category/ListCategoryService");
class ListCategoryController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Instanciando o serviço responsável por listar as categorias
            const listCategoryService = new ListCategoryService_1.ListCategoryService();
            // Executando o serviço para obter todas as categorias cadastradas
            const categories = yield listCategoryService.execute();
            // Retornando a lista de categorias como uma resposta JSON
            res.json(categories);
        });
    }
}
exports.ListCategoryController = ListCategoryController;
