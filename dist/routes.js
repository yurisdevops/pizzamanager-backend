"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailsUserController_1 = require("./controllers/user/DetailsUserController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const multer_1 = __importDefault(require("multer"));
const multer_2 = __importDefault(require("./config/multer"));
const ListByCategoryController_1 = require("./controllers/product/ListByCategoryController");
const CreateOrderController_1 = require("./controllers/order/CreateOrderController");
const RemoveOrderController_1 = require("./controllers/order/RemoveOrderController");
const AddItemController_1 = require("./controllers/order/AddItemController");
const RemoveItemController_1 = require("./controllers/order/RemoveItemController");
const SendOrderController_1 = require("./controllers/order/SendOrderController");
const ListOrderController_1 = require("./controllers/order/ListOrderController");
const DetailOrderController_1 = require("./controllers/order/DetailOrderController");
const FinishOrderController_1 = require("./controllers/order/FinishOrderController");
exports.router = (0, express_1.Router)(); // Inicializa o roteador do Express para definir rotas
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp")); // Configura o Multer para upload de arquivos no diretório especificado
// Rotas relacionadas a usuários
exports.router.post("/users", new CreateUserController_1.CreateUserController().handle);
// Rota para criar um novo usuário. O controlador `CreateUserController` lida com a lógica de criação.
exports.router.post("/session", new AuthUserController_1.AuthUserController().handle);
// Rota para autenticar o usuário (login). O controlador `AuthUserController` verifica as credenciais fornecidas.
exports.router.get("/me", isAuthenticated_1.isAuthenticated, new DetailsUserController_1.DetailsUserController().handle);
// Rota protegida que retorna os detalhes do usuário autenticado. O middleware `isAuthenticated` verifica o token JWT antes de acessar o controlador `DetailsUserController`.
// Rotas relacionadas a categorias
exports.router.post("/category", isAuthenticated_1.isAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
// Rota protegida para criar uma nova categoria. O middleware `isAuthenticated` valida se o usuário está autenticado antes de acessar o controlador `CreateCategoryController`.
exports.router.get("/categories", isAuthenticated_1.isAuthenticated, new ListCategoryController_1.ListCategoryController().handle);
// Rota protegida para listar todas as categorias. O middleware `isAuthenticated` verifica a autenticação, e o controlador `ListCategoryController` retorna as categorias registradas.
// Rotas relacionadas a produtos
exports.router.post("/product", isAuthenticated_1.isAuthenticated, new CreateProductController_1.CreateProductController().handle);
// Rota protegida para criar um novo produto. O controlador `CreateProductController` gerencia a lógica de criação do produto.
exports.router.get("/category/products", isAuthenticated_1.isAuthenticated, new ListByCategoryController_1.ListByCategoryController().handle);
// Rota protegida para listar produtos com base em uma categoria específica. O controlador `ListByCategoryController` retorna os produtos filtrados.
// Rotas relacionadas a pedidos
exports.router.post("/order", isAuthenticated_1.isAuthenticated, new CreateOrderController_1.CreateOrderController().handle);
// Rota protegida para criar um novo pedido. O controlador `CreateOrderController` gerencia o processo de criação de pedidos.
exports.router.delete("/order", isAuthenticated_1.isAuthenticated, new RemoveOrderController_1.RemoveOrderController().handle);
// Rota protegida para remover um pedido. O controlador `RemoveOrderController` realiza a exclusão do pedido especificado.
exports.router.post("/order/add", isAuthenticated_1.isAuthenticated, new AddItemController_1.AddItemController().handle);
// Rota protegida para adicionar itens a um pedido. O controlador `AddItemController` lida com a lógica de inserção de itens no pedido.
exports.router.delete("/order/remove", isAuthenticated_1.isAuthenticated, new RemoveItemController_1.RemoveItemController().handle);
// Rota protegida para remover itens de um pedido. O controlador `RemoveItemController` gerencia a lógica de exclusão dos itens.
exports.router.put("/order/send", isAuthenticated_1.isAuthenticated, new SendOrderController_1.SendOrderController().handle);
// Rota protegida para marcar um pedido como enviado. O controlador `SendOrderController` atualiza o status do pedido.
exports.router.get("/orders", isAuthenticated_1.isAuthenticated, new ListOrderController_1.ListOrderController().handle);
// Rota protegida para listar todos os pedidos. O controlador `ListOrderController` retorna os pedidos registrados.
exports.router.get("/order/detail", isAuthenticated_1.isAuthenticated, new DetailOrderController_1.DetailOrderController().handle);
// Rota protegida para visualizar detalhes de um pedido específico. O controlador `DetailOrderController` retorna as informações detalhadas.
exports.router.put("/order/finish", isAuthenticated_1.isAuthenticated, new FinishOrderController_1.FinishOrderController().handle);
// Rota protegida para finalizar um pedido. O controlador `FinishOrderController` atualiza o status do pedido para concluído. f
