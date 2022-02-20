import { LoadCustomers } from "../../domain/usecases/load-customers";
import { Customer } from "../../domain/entities/customer";

export class LoadCustomersService implements LoadCustomers {
  constructor(private readonly loadCustomersRepository: LoadCustomersRepository) {}

  async load(): Promise<Customer[]> {
  }
}