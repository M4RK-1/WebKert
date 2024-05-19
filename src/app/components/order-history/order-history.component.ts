// src/app/components/order-history/order-history.component.ts

import { Component, OnInit } from '@angular/core';
import { OrderHistoryService } from '../../services/order-history.service';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderHistoryService: OrderHistoryService) {}

  ngOnInit(): void {
    this.orderHistoryService.getOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }
}
