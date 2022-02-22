import { LoadCustomers } from "domain/usecases/load-customers";
import { Controller } from "presentation/contracts/controller";
import { HttpResponse, ok, serverError } from "presentation/contracts/http";
import { CustomerViewModel } from "presentation/view-models/customer";

export class LoadCustomersController implements Controller {
  constructor(private readonly loadCustomers: LoadCustomers) {}

  async handle(): Promise<HttpResponse<CustomerViewModel[]>> {
    try {
      const customers = await this.loadCustomers.load()
       return ok(customers)
    } catch (error) {
        return serverError(error as Error)
    }
  }
}