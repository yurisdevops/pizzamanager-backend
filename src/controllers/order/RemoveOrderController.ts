import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService";

export class RemoveOrderController {
  async handle(req: Request, res: Response) {
    // Obtendo o ID do pedido a ser removido a partir dos parâmetros da query string
    const order_id = req.query.order_id as string;

    // Instanciando o serviço responsável por remover o pedido
    const removeOrderService = new RemoveOrderService();

    // Executando o serviço para remover o pedido, passando o ID do pedido
    const remove = await removeOrderService.execute({ order_id });

    // Retornando a confirmação ou resultado da remoção como resposta JSON
    res.json(remove);
  }
}
