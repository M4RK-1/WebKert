import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) { }

  getProducts(): Observable<Product[]> {
    return this.firestore.collection<Product>('products').valueChanges();
  }

  getProductById(id: string): Observable<Product | undefined> {
    return this.firestore.doc<Product>(`products/${id}`).valueChanges();
  }
}
