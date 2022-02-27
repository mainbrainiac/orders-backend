import { LoadOrder } from "@/domain/usecases/load-order"
import { Order } from "@/domain/entities/order"
import { LoadOrderRepository } from "@/application/contracts/load-order-repository"

export class LoadOrderService implements LoadOrder {
  constructor(private readonly loadOrderRepository: LoadOrderRepository) {}

  async load(id: string): Promise<Order> {
    return this.loadOrderRepository.loadOrderById(id)
  }
}