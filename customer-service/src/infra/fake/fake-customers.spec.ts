import { FakeCustomersRepository } from "infra/fake/fake-customers"

describe('FakeCustomersRepository', () => {
  it('should defined', async () => {
    const fakeCustomerRepository = new FakeCustomersRepository()

    expect(fakeCustomerRepository).toBeDefined()
  })

  it('should have length equal 1', async () => {
    const fakeCustomersRepository = new FakeCustomersRepository()
    const customers = await fakeCustomersRepository.loadCustomers()

    expect(customers.length).toBe(1)
  })
})