import { OrderModel } from "@/application/models/order"

export interface LoadOrdersRepository {
  loadOrders: () => Promise<OrderModel[]>
}