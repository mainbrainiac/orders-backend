import { CustomerModel } from "application/models/customer"

export interface LoadCustomersRepository {
  loadCustomers: () => Promise<CustomerModel[]>
}