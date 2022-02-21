import { Customer } from "domain/entities/customer";

export interface LoadCustomer {
  load(id: string): Promise<Customer>;
}