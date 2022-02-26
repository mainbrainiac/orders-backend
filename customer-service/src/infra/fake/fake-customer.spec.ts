import { CustomerNotFound } from "infra/errors/customer-not-found"
import { FakeCustomerRepository } from "infra/fake/fake-customer"

describe('FakeCustomerRepository', () => {
  it('should load customer by id', async () => {
    const fakeCustomerRepository = new FakeCustomerRepository()
    const customer = await fakeCustomerRepository.loadCustomerById('1')

    expect(customer.id).toBe('1')
  })

  it('should load customer with correct properties', async () => {
    const fakeCustomerRepository = new FakeCustomerRepository()
    const customer = await fakeCustomerRepository.loadCustomerById('1')

    expect(customer).toHaveProperty('name')
    expect(customer).toHaveProperty('email')
    expect(customer).toHaveProperty('phone')
  })

  it('should throw error if customer not found', async () => {
    const fakeCustomerRepository = new FakeCustomerRepository()

    try {
      await fakeCustomerRepository.loadCustomerById('error-test')
    } catch (error) {
      expect(error).toBeInstanceOf(CustomerNotFound)
    }
  })
})