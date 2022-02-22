import { LoadCustomers } from "domain/usecases/load-customers";
import { Controller } from "presentation/contracts/controller";
import { HttpResponse } from "presentation/contracts/http";
import { CustomerViewModel } from "presentation/view-models/customer";

export class LoadCustomersController implements Controller {
  constructor(private readonly loadCustomers: LoadCustomers) {}

  async handle(): Promise<HttpResponse<CustomerViewModel[]>> {
    const customers = await this.loadCustomers.load()

    return {
      statusCode: 200,
      data: customers
    }
  }
}