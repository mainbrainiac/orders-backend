import { Customer } from "domain/entities/customer"

export interface LoadCustomers {
  load(): Promise<Customer[]>
}