import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/DetailOrderService";

export class DetailOrderController {
  async handle(req: Request, res: Response) {
    // Obtendo o ID do pedido a partir dos parâmetros da query string
    const order_id = req.query.order_id as string;

    // Instanciando o serviço responsável por detalhar o pedido
    const detailOrderService = new DetailOrderService();

    // Executando o serviço para obter os detalhes do pedido
    const orders = await detailOrderService.execute({ order_id });

    // Retornando os detalhes do pedido como resposta JSON
    res.json(orders);

    // Finalizando a execução do método
    return;
  }
}
