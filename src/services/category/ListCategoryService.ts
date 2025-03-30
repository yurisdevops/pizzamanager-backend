import prismaClient from "../../prisma";

export class ListCategoryService {
  async execute() {
    // Buscando todas as categorias do banco de dados usando o Prisma Client
    const category = await prismaClient.category.findMany({
      select: {
        id: true, // Selecionando o ID das categorias
        name: true, // Selecionando o nome das categorias
      },
    });

    // Retornando a lista de categorias obtidas
    return category;
  }
}
