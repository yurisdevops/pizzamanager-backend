import { Request, Response } from "express";
import { DetailsUserService } from "../../services/user/DetailsUserService";

export class DetailsUserController {
  async handle(req: Request, res: Response) {
    // Instanciando o serviço responsável por obter os detalhes do usuário
    const detailsUserService = new DetailsUserService();

    // Extraindo o ID do usuário a partir da propriedade 'user_id', que provavelmente foi adicionada pela autenticação
    const user_id = req.user_id;

    // Executando o serviço para buscar os detalhes do usuário com base no ID fornecido
    const user = await detailsUserService.execute(user_id);

    // Retornando os detalhes do usuário como resposta JSON
    res.json(user);
  }
}
