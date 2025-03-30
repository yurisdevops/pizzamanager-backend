import prismaClient from "../../prisma";

// Interface que define a estrutura dos dados esperados para criar um produto
interface ProductRequest {
  name: string; // Nome do produto
  price: string; // Preço do produto
  description: string; // Descrição do produto
  banner: string; // URL do banner do produto
  category_id: string; // ID da categoria associada ao produto
}

// Classe do serviço responsável pela criação de um novo produto
export class CreateProductService {
  async execute({
    banner,
    category_id,
    description,
    name,
    price,
  }: ProductRequest) {
    // Criando o produto no banco de dados usando o Prisma Client
    const product = prismaClient.product.create({
      data: {
        name, // Define o nome do produto
        price, // Define o preço do produto
        description, // Define a descrição do produto
        banner, // Define a URL do banner do produto
        category_id, // Define a categoria associada ao produto
      },
    });

    // Retorna os dados do produto criado
    return product;
  }
}
