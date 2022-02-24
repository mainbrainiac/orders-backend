import { LoadCustomerService } from "application/services/load-customer";
import { FakeCustomerRepository } from "infra/fake/fake-customer";
import { Controller } from "presentation/contracts/controller";
import { LoadCustomerController } from "presentation/controllers/load-customer-controller";

export const makeLoadCustomerController = (): Controller<string> => {
  const repo = new FakeCustomerRepository()
  const loadCustomer = new LoadCustomerService(repo)
  return new LoadCustomerController(loadCustomer)
}