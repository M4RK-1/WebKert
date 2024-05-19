// src/app/models/order.model.ts

import { CartItem } from './cart-item.model';

export interface Order {
  id?: string;
  items: CartItem[];
  location: string;
  date: Date;
}
