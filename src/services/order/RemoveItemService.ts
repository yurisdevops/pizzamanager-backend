import prismaClient from "../../prisma";

// Interface que define a estrutura dos dados esperados para remover um item
interface ItemRequest {
  item_id: string; // ID do item a ser removido
}

// Classe do serviço responsável por remover um item
export class RemoveItemService {
  async execute({ item_id }: ItemRequest) {
    // Utiliza o Prisma Client para deletar o item do banco de dados
    const item = await prismaClient.item.delete({
      where: {
        id: item_id, // Filtra pelo ID do item fornecido
      },
    });

    // Retorna os dados do item removido
    return item;
  }
}
