export const orders = [
  {
    id: '1',
    customerId: '1',
    restaurantId: '1',
    status: {
      code: 'created',
      description: 'Order created',
    },
    items: [
      {
        description: 'Product 1',
        quantity: 1,
        price: 100,
      },
      {
        description: 'Product 2',
        quantity: 10,
        price: 100,
      },
    ],
    createdAt: new Date(),
    confirmedAt: new Date()
  },
  {
    id: '2',
    customerId: '2',
    restaurantId: '2',
    status: {
      code: 'pending',
      description: 'Order pending',
    },
    items: [
      {
        description: 'Product 1',
        quantity: 10,
        price: 50,
      },
      {
        description: 'Product 2',
        quantity: 10,
        price: 100,
      },
    ],
    createdAt: new Date(),
    confirmedAt: new Date()
  },
]