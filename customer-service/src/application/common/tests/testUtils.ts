import { CustomerModel } from "@/application/models/customer";

export default class TestUtil {
  private static id = 1;
  
  static giveMeAValidCustomer(): CustomerModel {
    return {
      id: (this.id++).toString(),
      name: "John",
      email: "john@example.com", 
      phone: 0,
    }
  }
}