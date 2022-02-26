import { Order } from "../Entities/Order";

export interface LoadOrder {
  load(id: string): Promise<Order>;
}