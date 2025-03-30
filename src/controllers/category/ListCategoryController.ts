import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

export class ListCategoryController {
  async handle(req: Request, res: Response) {
    // Instanciando o serviço responsável por listar as categorias
    const listCategoryService = new ListCategoryService();

    // Executando o serviço para obter todas as categorias cadastradas
    const categories = await listCategoryService.execute();

    // Retornando a lista de categorias como uma resposta JSON
    res.json(categories);
  }
}
