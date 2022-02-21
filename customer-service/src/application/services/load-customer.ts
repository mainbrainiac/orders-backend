import { LoadCustomer } from "domain/usecases/load-customer"
import { Customer } from "domain/entities/customer"
import { LoadCustomerRepository } from "application/contracts/load-customer-repository"

export class LoadCustomerService implements LoadCustomer {
  constructor(private readonly loadCustomerRepository: LoadCustomerRepository) {}

  async load(id: string): Promise<Customer> {
    return this.loadCustomerRepository.loadCustomerById(id)
  }
}