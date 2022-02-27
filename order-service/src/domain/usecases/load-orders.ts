import type { Order } from "@/domain/entities/order";

export interface LoadOrders {
  load(): Promise<Order[]>;
}