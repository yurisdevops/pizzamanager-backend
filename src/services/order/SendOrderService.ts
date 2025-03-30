import prismaClient from "../../prisma";

// Interface que define a estrutura dos dados esperados para enviar um pedido
interface OrderRequest {
  order_id: string; // ID do pedido a ser enviado
}

// Classe do serviço responsável por enviar um pedido
export class SendOrderService {
  async execute({ order_id }: OrderRequest) {
    // Atualiza o pedido no banco de dados para indicar que ele não é mais um rascunho
    const order = await prismaClient.order.update({
      where: {
        id: order_id, // Filtra o pedido pelo ID fornecido
      },
      data: {
        draft: false, // Define o pedido como "enviado" (não mais um rascunho)
      },
    });

    // Retorna os dados do pedido atualizado
    return order;
  }
}
