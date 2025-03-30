import { Response, Request } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    // Extraindo os dados necessários (nome, e-mail e senha) do corpo da requisição
    const { name, email, password } = req.body;

    // Instanciando o serviço responsável por criar um novo usuário
    const createUserService = new CreateUserService();

    // Executando o serviço para criar o usuário com os dados fornecidos
    const user = await createUserService.execute({
      name,
      email,
      password,
    });

    // Retornando os dados do usuário criado como resposta JSON
    res.json(user);
  }
}
