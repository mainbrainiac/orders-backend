import { LoadOrderRepository } from "@/application/contracts/load-order-repository";
import { OrderModel } from "@/application/models/order";
import { orders } from "@/infra/data-sources/orders";
import { OrderNotFound } from "@/infra/errors/order-not-found";

export class FakeCustomerRepository implements LoadOrderRepository {
  async loadOrderById (id: string): Promise<OrderModel> {
    const order = orders.find(customer => customer.id === id)
    
    if (!order) {
      throw new OrderNotFound();
    }

    return order;
  }
}