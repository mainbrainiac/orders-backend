import TestUtil from '../common/tests/testUtils';
import { LoadCustomerService } from './load-customer';

describe('LoadCustomerService', () => {
  const mockRepository = {
    loadCustomerById: jest.fn()
  }
  let loadCustomerService: LoadCustomerService;

  beforeEach(() => {
    mockRepository.loadCustomerById.mockClear();
    loadCustomerService = new LoadCustomerService(mockRepository);
  })

  it('should be defined', () => {
    expect(loadCustomerService).toBeDefined();
  });

  it('should return customer by id', async () => {
    const mockUser1 = TestUtil.giveMeAValidCustomer()
    const mockUser2 = TestUtil.giveMeAValidCustomer()

    mockRepository.loadCustomerById.mockImplementation(id => [mockUser1, mockUser2].find(user => user.id === id))
    const user = await loadCustomerService.load('1')

    expect(user).toEqual(mockUser1)
  })

  it('should be called loadCustomerById method only once', () => {
    const mockUser1 = TestUtil.giveMeAValidCustomer()
    const mockUser2 = TestUtil.giveMeAValidCustomer()

    mockRepository.loadCustomerById.mockImplementation(id => [mockUser1, mockUser2].find(user => user.id === id))
    loadCustomerService.load('1')

    expect(mockRepository.loadCustomerById).toBeCalledTimes(1)
  })

  it('should return correct customer properties', async () => {
    const mockUser = TestUtil.giveMeAValidCustomer()

    mockRepository.loadCustomerById.mockImplementation(id => [mockUser].find(user => user.id === id))
    const user = await loadCustomerService.load(mockUser.id)

    expect(user).toHaveProperty('name')
    expect(user).toHaveProperty('email')
    expect(user).toHaveProperty('phone')
  })
})