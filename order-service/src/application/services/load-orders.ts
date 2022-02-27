import { LoadOrders } from "@/domain/usecases/load-orders"
import { Order } from "@/domain/entities/order"
import { LoadOrdersRepository } from "@/application/contracts/load-orders-repository"

export class LoadOrdersService implements LoadOrders {
  constructor(private readonly loadOrdersRepository: LoadOrdersRepository) {}

  async load(): Promise<Order[]> {
    return this.loadOrdersRepository.loadOrders()
  }
}