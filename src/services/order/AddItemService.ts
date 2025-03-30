import prismaClient from "../../prisma";

// Interface que define a estrutura dos dados esperados para criar um item
interface ItemRequest {
  order_id: string; // ID do pedido relacionado
  product_id: string; // ID do produto a ser adicionado
  amount: number; // Quantidade do produto a ser adicionada
}

// Classe do serviço responsável por adicionar um item a um pedido
export class AddItemService {
  async execute({ amount, order_id, product_id }: ItemRequest) {
    // Criando o item no banco de dados usando o Prisma Client
    const order = await prismaClient.item.create({
      data: {
        order_id: order_id, // ID do pedido relacionado ao item
        product_id: product_id, // ID do produto a ser adicionado ao pedido
        amount: amount, // Quantidade do produto especificada
      },
    });

    // Retornando os dados do item criado
    return order;
  }
}
