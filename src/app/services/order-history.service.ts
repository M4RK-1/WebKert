// src/app/services/order-history.service.ts

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  private readonly collectionName = 'orders';

  constructor(private firestore: AngularFirestore) {}

  addOrder(order: Order): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection(this.collectionName).doc(id).set({ ...order, id });
  }

  getOrders() {
    return this.firestore.collection<Order>(this.collectionName, ref => ref.orderBy('date', 'desc')).valueChanges();
  }
}
