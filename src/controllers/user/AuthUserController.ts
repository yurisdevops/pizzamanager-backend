import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

export class AuthUserController {
  async handle(req: Request, res: Response) {
    // Extraindo o e-mail e a senha a partir do corpo da requisição
    const { email, password } = req.body;

    // Instanciando o serviço responsável por autenticar o usuário
    const authUserService = new AuthUserService();

    // Executando o serviço de autenticação, passando o e-mail e a senha
    const auth = await authUserService.execute({
      email,
      password,
    });

    // Retornando os dados de autenticação como resposta JSON
    res.json(auth);
  }
}
