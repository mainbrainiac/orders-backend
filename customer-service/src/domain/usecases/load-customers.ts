import { Customer } from "../entities/customer";

export interface LoadCustomers {
  load(): Promise<Customer[]>;
}