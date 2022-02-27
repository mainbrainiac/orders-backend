import type { Order } from "@/domain/entities/order";

export interface LoadOrder {
  load(id: string): Promise<Order>;
}