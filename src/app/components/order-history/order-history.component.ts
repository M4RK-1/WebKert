import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import firebase from 'firebase/compat/app';  // Ensure firebase is imported

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  orders$!: Observable<any[]>;  // Use definite assignment assertion

  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.orders$ = this.firestore.collection('orders').valueChanges().pipe(
      map(orders => orders.map((order: any) => ({  // Assert order as any type
        ...order,
        date: order.date instanceof firebase.firestore.Timestamp ? order.date.toDate() : null  // Convert Firestore Timestamp to Date
      })))
    );
  }
}
