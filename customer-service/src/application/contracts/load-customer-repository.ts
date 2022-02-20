import { CustomerModel } from "../models/customer";

export interface LoadCustomerRepository {
  loadCustomerById: (id: string) => Promise<CustomerModel>;
}