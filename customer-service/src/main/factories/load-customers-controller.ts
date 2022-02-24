import { LoadCustomersService } from "application/services/load-customers";
import { FakeCustomersRepository } from "infra/fake/fake-customers";
import { Controller } from "presentation/contracts/controller";
import { LoadCustomersController } from "presentation/controllers/load-customers-controller";

export const makeLoadCustomersController = (): Controller<void> => {
  const repo = new FakeCustomersRepository()
  const loadCustomers = new LoadCustomersService(repo)
  return new LoadCustomersController(loadCustomers)
}