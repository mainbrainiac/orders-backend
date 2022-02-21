import { LoadCustomerRepository } from "application/contracts/load-customer-repository";
import { CustomerModel } from "application/models/customer";
import { customers } from "infra/data-sources/customers";
import { CustomerNotFound } from "infra/errors/customer-not-found";

export class FakeCustomerRepository implements LoadCustomerRepository {
  async loadCustomerById (id: string): Promise<CustomerModel> {
    const customer = customers.find(customer => customer.id === id)
    
    if (!customer) {
      throw new CustomerNotFound();
    }

    return {
      name: customer.fullName,
      email: customer.email,
      phone: customer.phone,
    };
  }
}