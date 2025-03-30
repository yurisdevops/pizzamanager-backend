import { Router, Request, Response, NextFunction } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailsUserController } from "./controllers/user/DetailsUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import multer from "multer";

import uploadConfig from "./config/multer";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";

export const router = Router(); // Inicializa o roteador do Express para definir rotas

const upload = multer(uploadConfig.upload("./tmp")); // Configura o Multer para upload de arquivos no diretório especificado

// Rotas relacionadas a usuários
router.post("/users", new CreateUserController().handle);
// Rota para criar um novo usuário. O controlador `CreateUserController` lida com a lógica de criação.

router.post("/session", new AuthUserController().handle);
// Rota para autenticar o usuário (login). O controlador `AuthUserController` verifica as credenciais fornecidas.

router.get("/me", isAuthenticated, new DetailsUserController().handle);
// Rota protegida que retorna os detalhes do usuário autenticado. O middleware `isAuthenticated` verifica o token JWT antes de acessar o controlador `DetailsUserController`.

// Rotas relacionadas a categorias
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);
// Rota protegida para criar uma nova categoria. O middleware `isAuthenticated` valida se o usuário está autenticado antes de acessar o controlador `CreateCategoryController`.

router.get("/categories", isAuthenticated, new ListCategoryController().handle);
// Rota protegida para listar todas as categorias. O middleware `isAuthenticated` verifica a autenticação, e o controlador `ListCategoryController` retorna as categorias registradas.

// Rotas relacionadas a produtos
router.post("/product", isAuthenticated, new CreateProductController().handle);
// Rota protegida para criar um novo produto. O controlador `CreateProductController` gerencia a lógica de criação do produto.

router.get(
  "/category/products",
  isAuthenticated,
  new ListByCategoryController().handle
);
// Rota protegida para listar produtos com base em uma categoria específica. O controlador `ListByCategoryController` retorna os produtos filtrados.

// Rotas relacionadas a pedidos
router.post("/order", isAuthenticated, new CreateOrderController().handle);
// Rota protegida para criar um novo pedido. O controlador `CreateOrderController` gerencia o processo de criação de pedidos.

router.delete("/order", isAuthenticated, new RemoveOrderController().handle);
// Rota protegida para remover um pedido. O controlador `RemoveOrderController` realiza a exclusão do pedido especificado.

router.post("/order/add", isAuthenticated, new AddItemController().handle);
// Rota protegida para adicionar itens a um pedido. O controlador `AddItemController` lida com a lógica de inserção de itens no pedido.

router.delete(
  "/order/remove",
  isAuthenticated,
  new RemoveItemController().handle
);
// Rota protegida para remover itens de um pedido. O controlador `RemoveItemController` gerencia a lógica de exclusão dos itens.

router.put("/order/send", isAuthenticated, new SendOrderController().handle);
// Rota protegida para marcar um pedido como enviado. O controlador `SendOrderController` atualiza o status do pedido.

router.get("/orders", isAuthenticated, new ListOrderController().handle);
// Rota protegida para listar todos os pedidos. O controlador `ListOrderController` retorna os pedidos registrados.

router.get(
  "/order/detail",
  isAuthenticated,
  new DetailOrderController().handle
);
// Rota protegida para visualizar detalhes de um pedido específico. O controlador `DetailOrderController` retorna as informações detalhadas.

router.put(
  "/order/finish",
  isAuthenticated,
  new FinishOrderController().handle
);
// Rota protegida para finalizar um pedido. O controlador `FinishOrderController` atualiza o status do pedido para concluído. f
