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
exports.CreateCategoryController = void 0;
const CreateCategoryService_1 = require("../../services/category/CreateCategoryService");
class CreateCategoryController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Extraindo o nome da categoria a partir do corpo da requisição
            const { name } = req.body;
            // Instanciando o serviço responsável por criar uma nova categoria
            const createCategoryService = new CreateCategoryService_1.CreateCategoryService();
            // Executando o serviço para criar a categoria com o nome fornecido
            const category = yield createCategoryService.execute({ name });
            // Retornando os dados da categoria criada como resposta JSON
            res.json(category);
            // Finalizando explicitamente o método, embora seja opcional neste caso
            return;
        });
    }
}
exports.CreateCategoryController = CreateCategoryController;
