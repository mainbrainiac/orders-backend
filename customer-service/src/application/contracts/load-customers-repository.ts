import { CustomerModel } from "../models/customer";

export interface LoadCustomersRepository {
  loadCustomers: () => Promise<CustomerModel[]>;
}