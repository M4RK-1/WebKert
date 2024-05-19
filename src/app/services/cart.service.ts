// src/app/services/cart.service.ts

import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  constructor() {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      this.items = JSON.parse(storedItems);
      console.log('Loaded cart items from localStorage:', this.items);
    }
  }

  addToCart(product: Product): void {
    console.log('Adding product to cart:', product);
    const existingItem = this.items.find(item => item.productId === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ productId: product.id, quantity: 1 });
    }
    localStorage.setItem('cartItems', JSON.stringify(this.items));
    console.log('Cart items:', this.items);
  }

  getCartItems(): CartItem[] {
    console.log('Retrieving cart items:', this.items);
    return this.items;
  }

  removeCartItem(productId: string): void {
    this.items = this.items.filter(item => item.productId !== productId);
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  clearCart(): void {
    this.items = [];
    localStorage.removeItem('cartItems');
  }
}
