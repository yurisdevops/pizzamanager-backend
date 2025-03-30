import prismaClient from "../../prisma";

// Interface para definir o tipo de requisição com o atributo 'name'
interface CategoryRequest {
  name: string;
}

// Classe do serviço responsável por criar uma nova categoria
export class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    // Validação para garantir que o nome da categoria não seja vazio
    if (name === " ") {
      throw new Error("Category name cannot be empty");
    }

    // Utilizando o Prisma Client para criar uma nova categoria no banco de dados
    const category = await prismaClient.category.create({
      data: {
        name: name, // Define o nome da nova categoria
      },
      select: {
        id: true, // Retorna o ID da categoria criada
        name: true, // Retorna o nome da categoria criada
      },
    });

    // Retorna os dados da categoria criada
    return category;
  }
}
