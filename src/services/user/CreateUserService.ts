import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

// Interface que define a estrutura dos dados esperados para criar um usuário
interface UserRequest {
  name: string; // Nome do usuário
  email: string; // E-mail do usuário
  password: string; // Senha do usuário
}

// Classe do serviço responsável por criar um novo usuário
export class CreateUserService {
  async execute({ email, name, password }: UserRequest) {
    // Verifica se o e-mail foi fornecido
    if (!email) {
      throw new Error("Email is required"); // Lança um erro caso o e-mail esteja ausente
    }

    // Verifica se o e-mail já está cadastrado no banco de dados
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email, // Filtra pelo e-mail fornecido
      },
    });

    if (userAlreadyExists) {
      throw new Error("Email already exists"); // Lança um erro caso o e-mail já esteja registrado
    }

    // Criptografa a senha utilizando o bcrypt
    const hashedPassword = await hash(password, 8);

    // Cria um novo usuário no banco de dados com os dados fornecidos
    const user = await prismaClient.user.create({
      data: {
        name: name, // Define o nome do usuário
        email: email, // Define o e-mail do usuário
        password: hashedPassword, // Define a senha criptografada do usuário
      },
      select: {
        id: true, // Retorna o ID do usuário criado
        name: true, // Retorna o nome do usuário criado
        email: true, // Retorna o e-mail do usuário criado
        password: false, // Esconde a senha na resposta
      },
    });

    // Retorna os dados do usuário criado
    return user;
  }
}
