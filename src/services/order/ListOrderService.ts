import prismaClient from "../../prisma";

export class ListOrderService {
  async execute() {
    // Busca todos os pedidos no banco de dados usando o Prisma Client
    const orders = await prismaClient.order.findMany({
      where: {
        draft: false, // Filtra os pedidos que não são rascunhos
        status: false, // Filtra os pedidos que ainda não foram finalizados
      },
      orderBy: {
        created_at: "desc", // Ordena os pedidos em ordem decrescente pela data de criação
      },
    });

    // Retorna a lista de pedidos encontrados
    return orders;
  }
}
