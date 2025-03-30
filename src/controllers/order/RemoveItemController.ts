import { Request, Response } from "express";
import { RemoveItemService } from "../../services/order/RemoveItemService";

export class RemoveItemController {
  async handle(req: Request, res: Response) {
    // Obtendo o ID do item a ser removido a partir dos parâmetros da query string
    const item_id = req.query.item_id as string;

    // Instanciando o serviço responsável por remover o item
    const removeItemService = new RemoveItemService();

    // Executando o serviço para remover o item, passando o ID do item
    const item = await removeItemService.execute({
      item_id,
    });

    // Retornando o item removido ou a confirmação como resposta JSON
    res.json(item);
  }
}
