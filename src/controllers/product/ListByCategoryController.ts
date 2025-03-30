import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

export class ListByCategoryController {
  async handle(req: Request, res: Response) {
    // Obtendo o ID da categoria a partir dos parâmetros da query string
    const category_id = req.query.category_id as string;

    // Instanciando o serviço responsável pela lógica de listagem
    const listByCategoryService = new ListByCategoryService();

    // Chamando o método execute do serviço para buscar os produtos da categoria fornecida
    const products = await listByCategoryService.execute({ category_id });

    // Retornando a lista de produtos como uma resposta JSON
    res.json(products);
  }
}
