import prismaClient from "../../prisma";

// Interface que define a estrutura dos dados esperados para remover um pedido
interface OrderRequest {
  order_id: string; // ID do pedido a ser removido
}

// Classe do serviço responsável por remover um pedido
export class RemoveOrderService {
  async execute({ order_id }: OrderRequest) {
    // Utilizando o Prisma Client para deletar o pedido do banco de dados
    const remove = await prismaClient.order.delete({
      where: {
        id: order_id, // Filtra o pedido pelo ID fornecido
      },
    });

    // Retorna os dados do pedido removido
    return remove;
  }
}
