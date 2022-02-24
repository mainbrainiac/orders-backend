import { Router } from "express";
import { adaptRoute } from "main/adapters/express-router";
import { makeLoadCustomersController } from "main/factories/load-customers-controller";
import { makeLoadCustomerController } from "main/factories/load-customer-controller";

export default (router: Router): void => {
  router.get('/customers', adaptRoute(makeLoadCustomersController()))
  router.get('/customer/:id', adaptRoute(makeLoadCustomerController()))
}