import { LoadCustomers } from "domain/usecases/load-customers"
import { Customer } from "domain/entities/customer"
import { LoadCustomersRepository } from "application/contracts/load-customers-repository"

export class LoadCustomersService implements LoadCustomers {
  constructor(private readonly loadCustomersRepository: LoadCustomersRepository) {}

  async load(): Promise<Customer[]> {
    return this.loadCustomersRepository.loadCustomers()
  }
}