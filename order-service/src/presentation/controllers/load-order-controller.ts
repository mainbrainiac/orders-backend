
import { LoadOrder } from "@/domain/usecases/load-order";
import { Controller } from "presentation/contracts/controller";
import { HttpResponse, ok, serverError } from "presentation/contracts/http";
import { OrderViewModel } from "presentation/view-models/order";

export class LoadOrderController implements Controller<string> {
  constructor(private readonly loadOrder: LoadOrder) {}

  async handle(id: string): Promise<HttpResponse<OrderViewModel>> {
    try {
      const order = await this.loadOrder.load(id)
       return ok(order)
    } catch (error) {
        return serverError(error as Error)
    }
  }
}