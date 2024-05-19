import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) {}

  getProducts(): Observable<Product[]> {
    return this.firestore.collection<Product>('products').valueChanges({ idField: 'id' });
  }

  getProductsByCategory(category: string) {
    return this.firestore.collection('products', ref =>
      ref.where('category', '==', category).orderBy('price', 'asc').limit(20)
    ).snapshotChanges();
  }

  getProductById(id: string): Observable<Product | undefined> {
    return this.firestore.collection<Product>('products').doc(id).valueChanges();
  }
}
