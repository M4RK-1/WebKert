import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
      private route: ActivatedRoute,
      private productService: ProductService,
      private cartService: CartService
  ) {}

  ngOnInit(): void {
    console.log('ProductDetailComponent initialized');  // Debugging log
    const id = this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(id).subscribe(product => {
      if (product) {
        this.product = product;
        console.log('Product loaded:', this.product);  // Debugging log
      } else {
        console.error(`Product with id ${id} not found`);  // Debugging log
      }
    });
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
      console.log('Product added to cart:', this.product);  // Debugging log
    } else {
      console.log('No product found to add to cart');  // Debugging log
    }
  }
}
