import { Customer } from "../entities/customer";

export interface LoadCustomer {
  load(id: string): Promise<Customer>;
}