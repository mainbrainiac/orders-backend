import TestUtil from '../common/tests/testUtils';
import { LoadCustomersService } from './load-customers';

describe('LoadCustomersService', () => {
  const mockRepository = {
    loadCustomers: jest.fn()
  }
  let loadCustomerService: LoadCustomersService;

  beforeEach(() => {
    mockRepository.loadCustomers.mockClear();
    loadCustomerService = new LoadCustomersService(mockRepository);
  })

  it('should be defined', () => {
    expect(loadCustomerService).toBeDefined();
  });

  it('should return customer by id', async () => {
    const mockUser1 = TestUtil.giveMeAValidCustomer()
    const mockUser2 = TestUtil.giveMeAValidCustomer()

    mockRepository.loadCustomers.mockResolvedValue([mockUser1, mockUser2])
    const users = await loadCustomerService.load()

    expect(users).toHaveLength(2)
  })

  it('should be called loadCustomers method only once', async () => {
    const mockUser1 = TestUtil.giveMeAValidCustomer()
    const mockUser2 = TestUtil.giveMeAValidCustomer()

    mockRepository.loadCustomers.mockResolvedValue([mockUser1, mockUser2])
    await loadCustomerService.load()

    expect(mockRepository.loadCustomers).toBeCalledTimes(1)
  })
})