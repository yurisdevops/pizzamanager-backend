import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

// Interface que define a estrutura dos dados esperados para autenticar um usuário
interface AuthRequest {
  email: string; // E-mail do usuário
  password: string; // Senha do usuário
}

export class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    // Verifica se o e-mail existe no banco de dados
    const user = await prismaClient.user.findFirst({
      where: {
        email: email, // Filtra pelo e-mail fornecido
      },
    });

    if (!user) {
      // Lança um erro caso o e-mail não seja encontrado
      throw new Error("User/password incorrect");
    }

    // Compara a senha fornecida com a senha armazenada no banco de dados
    const passwordMath = await compare(password, user.password);

    if (!passwordMath) {
      // Lança um erro caso a senha esteja incorreta
      throw new Error("User/password incorrect");
    }

    // Gera um token JWT com os dados do usuário autenticado
    const token = sign(
      {
        name: user.name, // Nome do usuário
        email: user.email, // E-mail do usuário
      },
      process.env.JWT_SECRET, // Chave secreta do JWT, definida nas variáveis de ambiente
      {
        subject: user.id, // ID do usuário como identificador no token
        expiresIn: "30d", // Define o tempo de expiração do token para 30 dias
      }
    );

    // Retorna os dados do usuário autenticado junto com o token gerado
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token,
    };
  }
}
