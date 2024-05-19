import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.productService.getProducts().subscribe((products) => {
        this.products = products;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleAddToCart(product: Product): void {
    console.log('Added to cart:', product);
    this.cartService.addToCart(product); // Add the product to the cart
  }
}
