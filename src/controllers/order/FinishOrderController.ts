import { Request, Response } from "express";
import { FinishOrderService } from "../../services/order/FinishOrderService";

export class FinishOrderController {
  async handle(req: Request, res: Response) {
    // Extraindo o ID do pedido a partir do corpo da requisição
    const { order_id } = req.body;

    // Instanciando o serviço responsável por finalizar o pedido
    const finishOrderService = new FinishOrderService();

    // Executando o serviço para finalizar o pedido, passando o ID do pedido
    const order = await finishOrderService.execute({ order_id });

    // Retornando o pedido finalizado como uma resposta JSON
    res.json(order);
  }
}
