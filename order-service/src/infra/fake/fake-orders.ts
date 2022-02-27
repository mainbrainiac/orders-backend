import { LoadOrdersRepository } from "@/application/contracts/load-orders-repository";
import { OrderModel } from "@/application/models/order";
import { orders } from "@/infra/data-sources/orders";

export class FakeCustomerRepository implements LoadOrdersRepository {
  async loadOrders(): Promise<OrderModel[]> {
    return orders;
  };
}