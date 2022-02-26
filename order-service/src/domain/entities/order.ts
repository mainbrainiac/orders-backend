export type Order = {
  createdAt: Date;
  confirmedAt: Date;
  status: OrderStatus;
  customer: Customer;
  items : OrderItem[];
}

export type Customer = {
  name: string;
  email: string;
  phone: number;
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