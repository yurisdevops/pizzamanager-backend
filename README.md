#  PizzaManager - Backend

> API robusta para gestão de pizzarias: usuários, produtos, categorias e pedidos em um só lugar.

O **PizzaManager** é o backend de uma plataforma moderna para gestão de pizzarias, desenvolvido com **Node.js**, **TypeScript** e **Prisma ORM**. A aplicação fornece uma API REST segura e escalável, com suporte a autenticação JWT, upload de imagens via Multer e organização clara dos recursos de negócio. O banco de dados utilizado é o **PostgreSQL**, hospedado na plataforma **Neon.tech**.

## Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Contato](#contato)

## Descrição do Projeto

A API do **PizzaManager** fornece endpoints REST para:

- Autenticação de usuários com JWT.
- Gerenciamento de categorias e produtos.
- Criação e manipulação de pedidos com controle de status.
- Upload de arquivos com **Multer** (imagens de produtos).
- Acesso restrito por autenticação em rotas protegidas.

---

## Funcionalidades

- **Autenticação:**
  - Login com JWT.
  - Rota protegida para obter detalhes do usuário.

- **Usuários:**
  - Registro de novos usuários.
  - Autenticação com geração de token.

- **Categorias:**
  - Criação e listagem de categorias (protegido por login).

- **Produtos:**
  - Cadastro de produtos com imagem.
  - Listagem por categoria.

- **Pedidos:**
  - Criação e remoção de pedidos.
  - Adição e remoção de itens.
  - Envio, finalização e listagem de pedidos.
  - Visualização de detalhes por pedido.

---

## Tecnologias Utilizadas

- **Node.js & Express:** Servidor HTTP e gerenciamento de rotas.
- **TypeScript:** Tipagem estática para maior robustez.
- **Prisma ORM:** Comunicação com o banco de dados.
- **PostgreSQL (Neon.tech):** Banco de dados principal, hospedado na nuvem.
- **JWT:** Autenticação de usuários.
- **Multer:** Upload de imagens.
- **dotenv:** Gerenciamento de variáveis de ambiente.
- **CORS & Express Async Errors:** Middleware essenciais.

---

## Como Usar

### 1. Clonar o Repositório

```bash
git clone https://github.com/yurisdevops/pizzamanager-backend.git
cd pizzamanager-backend
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Configurar as Variáveis de Ambiente

Crie um arquivo `.env` na raiz com:

```env
DATABASE_URL="url_do_banco_gerado_pelo_neon.tech"
JWT_SECRET="seu_token_secreto"
```

 A URL do banco pode ser obtida na dashboard da [Neon.tech](https://neon.tech).

### 4. Configurar o Prisma

```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Rodar o Projeto

```bash
npm run dev
```

A API estará disponível em `http://localhost:3333`

---

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm run start`: Executa a aplicação em produção.
- `npm run prisma:generate`: Gera os tipos do Prisma.
- `npm run vercel-build`: Gera os artefatos e aplica as migrações (Vercel).

---

## Estrutura de Pastas

```
📦 src
├── config             # Configurações do projeto (ex: multer)
├── controllers        # Lógica dos endpoints da API
├── middlewares        # Middlewares (ex: autenticação JWT)
├── routes.ts          # Definição das rotas
├── server.ts          # Inicialização do servidor
```

---

## Contato

Desenvolvido por [Yuri Souza](https://github.com/yurisdevops)  
📧 **Email:** yurimachado.dev@gmail.com
