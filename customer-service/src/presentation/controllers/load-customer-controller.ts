import { LoadCustomer } from "domain/usecases/load-customer";
import { Controller } from "presentation/contracts/controller";
import { HttpResponse, ok, serverError } from "presentation/contracts/http";
import { CustomerViewModel } from "presentation/view-models/customer";

export class LoadCustomerController implements Controller<string> {
  constructor(private readonly loadCustomer: LoadCustomer) {}

  async handle(id: string): Promise<HttpResponse<CustomerViewModel>> {
    try {
      const customer = await this.loadCustomer.load(id)
       return ok(customer)
    } catch (error) {
        return serverError(error as Error)
    }
  }
}