import { LoadCustomersRepository } from "application/contracts/load-customers-repository";
import { CustomerModel } from "application/models/customer";
import { customers } from "infra/data-sources/customers";

export class FakeCustomersRepository implements LoadCustomersRepository {
  async loadCustomers(): Promise<CustomerModel[]> {
    return customers.map(customer => ({
      id: customer.id,
      name: customer.fullName,
      email: customer.email,
      phone: customer.phone,
    }))
  }
}