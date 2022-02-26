import { Order } from "../Entities/Order";

export interface LoadOrders {
  load(): Promise<Order[]>;
}