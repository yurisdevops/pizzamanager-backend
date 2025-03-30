import prismaClient from "../../prisma";

// Interface para definir a estrutura dos dados esperados para criar um pedido
interface OrderRequest {
  name: string; // Nome associado ao pedido
  table: number; // Número da mesa para o pedido
}

// Classe do serviço responsável pela criação de um novo pedido
export class CreateOrderService {
  async execute({ name, table }: OrderRequest) {
    // Criando um novo pedido no banco de dados usando o Prisma Client
    const order = await prismaClient.order.create({
      data: {
        name, // Define o nome do pedido
        table, // Define o número da mesa do pedido
      },
    });

    // Retorna os dados do pedido criado
    return order;
  }
}
