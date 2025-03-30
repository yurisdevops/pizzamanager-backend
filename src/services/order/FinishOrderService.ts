import prismaClient from "../../prisma";

// Interface que define a estrutura dos dados esperados para finalizar um pedido
interface OrderRequest {
  order_id: string; // ID do pedido a ser finalizado
}

// Classe do serviço responsável por finalizar um pedido
export class FinishOrderService {
  async execute({ order_id }: OrderRequest) {
    // Atualizando o status do pedido no banco de dados para finalizado (status: true)
    const order = await prismaClient.order.update({
      where: {
        id: order_id, // Identifica o pedido a ser atualizado pelo ID fornecido
      },
      data: {
        status: true, // Define o status como "finalizado"
      },
    });

    // Retorna os dados do pedido atualizado
    return order;
  }
}
