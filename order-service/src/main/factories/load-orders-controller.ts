import { LoadOrdersService } from "@/application/services/load-orders";
import { FakeOrdersRepository } from "@/infra/fake/fake-orders";
import { Controller } from "@/presentation/contracts/controller";
import { LoadOrdersController } from "@/presentation/controllers/load-orders-controller";

export const makeLoadOrdersController = (): Controller<void> => {
  const repo = new FakeOrdersRepository()
  const loadOrders = new LoadOrdersService(repo)
  return new LoadOrdersController(loadOrders)
}