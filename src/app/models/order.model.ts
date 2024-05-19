// src/app/models/order.model.ts

export interface Order {
  id: string;
  userId: string;
  products: OrderProduct[];
  totalAmount: number;
  orderDate: Date;
}

export interface OrderProduct {
  productId: string;
  quantity: number;
}
