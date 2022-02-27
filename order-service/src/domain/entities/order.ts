export type Order = {
  createdAt: Date;
  confirmedAt: Date;
  status: OrderStatus;
  items : OrderItem[];
  customerId: string;
  restaurantId: string;
}

export type OrderStatus = {
  code: string;
  description: string;
}

export type OrderItem = {
  description: string;
  quantity: number;
  price: number;
}