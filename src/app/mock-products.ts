// src/app/mock-products.ts

import { Product } from './models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Phone Model A',
    description: 'Description of Phone Model A',
    price: 299,
    imageUrl: 'assets/phoneA.jpg',
    categoryId: 'cat1'
  },
  {
    id: '2',
    name: 'Phone Model B',
    description: 'Description of Phone Model B',
    price: 399,
    imageUrl: 'assets/phoneB.jpg',
    categoryId: 'cat1'
  }
];
