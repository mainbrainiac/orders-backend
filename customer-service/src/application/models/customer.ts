import type { Customer } from "domain/entities/customer"

export interface CustomerModel extends Customer {
  id: string
}