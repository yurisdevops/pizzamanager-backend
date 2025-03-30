import { Request, Response } from "express";
import { ListOrderService } from "../../services/order/ListOrderService";

export class ListOrderController {
  async handle(req: Request, res: Response) {
    // Instanciando o serviço responsável por listar os pedidos
    const listOrderService = new ListOrderService();

    // Executando o serviço para obter a lista de pedidos
    const orders = await listOrderService.execute();

    // Retornando a lista de pedidos como uma resposta JSON
    res.json(orders);
  }
}
