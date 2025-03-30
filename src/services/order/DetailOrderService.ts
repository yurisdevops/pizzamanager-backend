import prismaClient from "../../prisma";

// Interface que define a estrutura dos dados esperados para detalhar um pedido
interface DetailRequest {
  order_id: string; // ID do pedido a ser detalhado
}

// Classe do serviço responsável por obter detalhes de um pedido
class DetailOrderService {
  async execute({ order_id }: DetailRequest) {
    // Busca os itens do pedido no banco de dados, utilizando o Prisma Client
    const order = await prismaClient.item.findMany({
      where: {
        order_id: order_id, // Filtra os itens pelo ID do pedido fornecido
      },
      include: {
        product: true, // Inclui informações relacionadas ao produto de cada item
        order: true, // Inclui informações gerais do pedido
      },
    });

    // Retorna os detalhes do pedido, incluindo os itens e informações adicionais
    return order;
  }
}

export { DetailOrderService };
