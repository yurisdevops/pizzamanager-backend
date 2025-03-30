import prismaClient from "../../prisma";

// Interface que define a estrutura dos dados esperados para listar produtos por categoria
interface ProductRequest {
  category_id: string; // ID da categoria para filtrar os produtos
}

// Classe do serviço responsável por listar os produtos de uma categoria específica
export class ListByCategoryService {
  async execute({ category_id }: ProductRequest) {
    // Busca os produtos no banco de dados que pertencem à categoria fornecida
    const findByCategory = await prismaClient.product.findMany({
      where: {
        category_id: category_id, // Filtra os produtos com base no ID da categoria
      },
    });

    // Retorna a lista de produtos encontrados
    return findByCategory;
  }
}
