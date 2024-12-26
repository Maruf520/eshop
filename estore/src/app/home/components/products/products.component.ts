import { Component } from '@angular/core';
import { ProductsService } from '../../services/product/products.service';
import { Product } from '../../types/products.type';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from '../../../shared/components/ratings/ratings.component';
import { ProductStoreItem } from '../../services/product/product.storeItem';
import { RouterModule } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartStoreItem } from '../../services/cart/cart.storeItem';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RatingsComponent, RouterModule, FontAwesomeModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  faShoppingCart = faShoppingCart;
  constructor(
    public productStoreItem: ProductStoreItem,
    private cart: CartStoreItem
  ) {}

  addToCart(product: Product) {
    this.cart.addProduct(product);
  }
}
