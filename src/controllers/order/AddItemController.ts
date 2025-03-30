import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

export class AddItemController {
  async handle(req: Request, res: Response) {
    const { order_id, product_id, amount } = req.body;

    // Instanciando o serviço responsável por adicionar um item ao pedido
    const addItemService = new AddItemService();

    // Executando o serviço e passando os dados necessários
    const order = await addItemService.execute({
      order_id,
      product_id,
      amount,
    });

    // Retornando o pedido atualizado como resposta JSON
    res.json(order);
  }
}
