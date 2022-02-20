import { Entity } from '../../core/entities/Entity';

type CustomerProps = {
  name: string;
  email: string;
  phone: number;
}

export class Customer extends Entity<CustomerProps> {
  private constructor(props: CustomerProps, id?: string) {
    super(props, id)
  }

  public create(props: CustomerProps, id?: string) {
    return new Customer(props, id)
  }
}