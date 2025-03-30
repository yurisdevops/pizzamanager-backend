import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

export class CreateOrderController {
  async handle(req: Request, res: Response) {
    const { table, name } = req.body;

    // Instanciando o serviço responsável por criar o pedido
    const createOrderService = new CreateOrderService();

    // Executando o serviço e enviando os dados necessários para criar o pedido
    const order = await createOrderService.execute({
      table,
      name,
    });

    // Retornando o pedido criado como uma resposta JSON
    res.json(order);
  }
}
