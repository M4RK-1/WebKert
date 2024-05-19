// src/app/components/order/order.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { OrderHistoryService } from '../../services/order-history.service';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private orderHistoryService: OrderHistoryService
  ) {
    this.orderForm = this.fb.group({
      location: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  submitOrder(): void {
    if (this.orderForm.invalid) {
      return;
    }

    const cartItems = this.cartService.getCartItems();
    const order: Order = {
      items: cartItems,
      location: this.orderForm.value.location,
      date: new Date()
    };

    this.orderHistoryService.addOrder(order).then(() => {
      this.cartService.clearCart();
      this.orderForm.reset();
      alert('Order placed successfully!');
    }).catch(error => {
      console.error('Error placing order:', error);
    });
  }
}
