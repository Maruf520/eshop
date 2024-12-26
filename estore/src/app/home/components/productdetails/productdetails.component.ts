import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/product/products.service';
import { Subscription } from 'rxjs';
import { Product } from '../../types/products.type';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from '../../../shared/components/ratings/ratings.component';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartStoreItem } from '../../services/cart/cart.storeItem';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule, RatingsComponent, FontAwesomeModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss',
})
export class ProductdetailsComponent implements OnInit, OnDestroy {
  product!: Product;
  subscription: Subscription = new Subscription();
  faShoppingCart = faShoppingCart;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private cart: CartStoreItem
  ) {}
  ngOnInit(): void {
    const id: number = Number(
      this.activatedRoute.snapshot.paramMap.get('id') ?? 0
    );
    this.subscription.add(
      this.productService.getProduct(id).subscribe((product) => {
        this.product = product[0];
        console.log('Test', this.product);
      })
    );
  }

  addToCart() {
    this.cart.addProduct(this.product);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
