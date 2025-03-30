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
exports.AddItemService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
// Classe do serviço responsável por adicionar um item a um pedido
class AddItemService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ amount, order_id, product_id }) {
            // Criando o item no banco de dados usando o Prisma Client
            const order = yield prisma_1.default.item.create({
                data: {
                    order_id: order_id, // ID do pedido relacionado ao item
                    product_id: product_id, // ID do produto a ser adicionado ao pedido
                    amount: amount, // Quantidade do produto especificada
                },
            });
            // Retornando os dados do item criado
            return order;
        });
    }
}
exports.AddItemService = AddItemService;
