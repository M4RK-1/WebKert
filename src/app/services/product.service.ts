import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private firestore: AngularFirestore) {}

  getProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }

  getProductsByCategory(category: string) {
    return this.firestore.collection('products', ref =>
      ref.where('category', '==', category).orderBy('price', 'asc').limit(20)
    ).snapshotChanges();
  }

  addProduct(product: Product) {
    return this.firestore.collection('products').add(product);
  }

  updateProduct(id: string, product: Product) {
    return this.firestore.doc(`products/${id}`).update(product);
  }

  deleteProduct(id: string) {
    return this.firestore.doc(`products/${id}`).delete();
  }
}
