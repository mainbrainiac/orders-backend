import { LoadOrderService } from "@/application/services/load-order";
import { FakeOrderRepository } from "@/infra/fake/fake-order";
import { Controller } from "@/presentation/contracts/controller";
import { LoadOrderController } from "@/presentation/controllers/load-order-controller";

export const makeLoadOrderController = (): Controller<string> => {
  const repo = new FakeOrderRepository()
  const loadOrder = new LoadOrderService(repo)
  return new LoadOrderController(loadOrder)
}