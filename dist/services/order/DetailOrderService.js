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
exports.DetailOrderService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
// Classe do serviço responsável por obter detalhes de um pedido
class DetailOrderService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ order_id }) {
            // Busca os itens do pedido no banco de dados, utilizando o Prisma Client
            const order = yield prisma_1.default.item.findMany({
                where: {
                    order_id: order_id, // Filtra os itens pelo ID do pedido fornecido
                },
                include: {
                    product: true, // Inclui informações relacionadas ao produto de cada item
                    order: true, // Inclui informações gerais do pedido
                },
            });
            // Retorna os detalhes do pedido, incluindo os itens e informações adicionais
            return order;
        });
    }
}
exports.DetailOrderService = DetailOrderService;
