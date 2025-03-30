import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";

export class SendOrderController {
  async handle(req: Request, res: Response) {
    // Extraindo o ID do pedido a partir do corpo da requisição
    const { order_id } = req.body;

    // Instanciando o serviço responsável por enviar o pedido
    const sendOrderService = new SendOrderService();

    // Executando o serviço para enviar o pedido, passando o ID do pedido
    const order = await sendOrderService.execute({
      order_id,
    });

    // Retornando o pedido enviado como resposta JSON
    res.json(order);
  }
}
