import { Response, Request } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    // Extraindo o nome da categoria a partir do corpo da requisição
    const { name } = req.body;

    // Instanciando o serviço responsável por criar uma nova categoria
    const createCategoryService = new CreateCategoryService();

    // Executando o serviço para criar a categoria com o nome fornecido
    const category = await createCategoryService.execute({ name });

    // Retornando os dados da categoria criada como resposta JSON
    res.json(category);

    // Finalizando explicitamente o método, embora seja opcional neste caso
    return;
  }
}
