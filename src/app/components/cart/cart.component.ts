// src/app/components/cart/cart.component.ts

import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { CartItem } from '../../models/cart-item.model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: { product: Product, quantity: number }[] = [];

  constructor(private cartService: CartService, private productService: ProductService) {}

  ngOnInit(): void {
    console.log("Initialization check")
    const items = this.cartService.getCartItems();
    console.log('Cart items on init:', items); // Debugging
    items.forEach(item => {
      this.productService.getProductById(item.productId).subscribe(product => {
        if (product) {
          this.cartItems.push({ product, quantity: item.quantity });
          console.log('Product added to cartItems:', product); // Debugging
        } else {
          console.error(`Product with id ${item.productId} not found`); // Debugging
        }
      });
    });
  }

  removeItem(productId: string): void {
    this.cartService.removeCartItem(productId);
    let temp = localStorage.getItem('cartItems');
    console.log('Cart items on remove:', productId); // Debugging
    if (temp) {
      const cartItems = JSON.parse(temp);
      const updatedCartItems = cartItems.filter((item: CartItem) => item.productId !== productId);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }

    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }
}
