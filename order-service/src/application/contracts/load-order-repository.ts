import { OrderModel } from "@/application/models/order"

export interface LoadOrderRepository {
  loadOrderById: (id: string) => Promise<OrderModel>
}