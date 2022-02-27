import type { Order } from "@/domain/entities/order"

export interface OrderModel extends Order {
  id: string
}