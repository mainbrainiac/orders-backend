import { LoadOrderRepository } from "@/application/contracts/load-order-repository";
import { OrderModel } from "@/application/models/order";
import { orders } from "@/infra/data-sources/orders";
import { OrderNotFound } from "@/infra/errors/order-not-found";

export class FakeOrderRepository implements LoadOrderRepository {
  async loadOrderById (id: string): Promise<OrderModel> {
    const order = orders.find(order => order.id === id)
    
    if (!order) {
      throw new OrderNotFound();
    }

    return order;
  }
}