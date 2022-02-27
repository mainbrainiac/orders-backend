import { LoadOrders } from "domain/usecases/load-orders";
import { Controller } from "presentation/contracts/controller";
import { HttpResponse, ok, serverError } from "presentation/contracts/http";
import { OrderViewModel } from "presentation/view-models/order";

export class LoadOrdersController implements Controller<void> {
  constructor(private readonly loadCustomers: LoadOrders) {}

  async handle(): Promise<HttpResponse<OrderViewModel[]>> {
    try {
      const orders = await this.loadCustomers.load()
       return ok(orders)
    } catch (error) {
        return serverError(error as Error)
    }
  }
}