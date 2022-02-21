import { CustomerModel } from "application/models/customer"

export interface LoadCustomerRepository {
  loadCustomerById: (id: string) => Promise<CustomerModel>
}