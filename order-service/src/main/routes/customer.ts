import { Router } from "express";
import { adaptRoute } from "main/adapters/express-router";
import { makeLoadOrdersController } from "main/factories/load-orders-controller";
import { makeLoadOrderController } from "main/factories/load-order-controller";

export default (router: Router): void => {
  router.get('/orders', adaptRoute(makeLoadOrdersController()))
  router.get('/order/:id', adaptRoute(makeLoadOrderController()))
}