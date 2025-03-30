"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importando o cliente Prisma para interagir com o banco de dados
const client_1 = require("@prisma/client");
// Criando uma instância do cliente Prisma
const prismaClient = new client_1.PrismaClient();
// Exportando a instância para ser reutilizada em outras partes da aplicação
exports.default = prismaClient;
