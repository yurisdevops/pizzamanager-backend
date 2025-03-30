import prismaClient from "../../prisma";

// Classe do serviço responsável por obter os detalhes de um usuário
export class DetailsUserService {
  async execute(user_id: string) {
    // Busca no banco de dados o usuário que corresponde ao ID fornecido
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id, // Filtra pelo ID do usuário
      },
      select: {
        id: true, // Retorna o ID do usuário
        name: true, // Retorna o nome do usuário
        email: true, // Retorna o e-mail do usuário
      },
    });

    // Retorna os detalhes do usuário encontrado
    return user;
  }
}
