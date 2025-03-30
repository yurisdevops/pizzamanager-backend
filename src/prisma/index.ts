// Importando o cliente Prisma para interagir com o banco de dados
import { PrismaClient } from "@prisma/client";

// Criando uma instância do cliente Prisma
const prismaClient = new PrismaClient();

// Exportando a instância para ser reutilizada em outras partes da aplicação
export default prismaClient;
