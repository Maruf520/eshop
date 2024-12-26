import { Component } from '@angular/core';
import { ProductsService } from '../../services/product/products.service';
import { Product } from '../../types/products.type';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from '../../../shared/components/ratings/ratings.component';
import { ProductStoreItem } from '../../services/product/product.storeItem';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RatingsComponent, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(public productStoreItem: ProductStoreItem) {}
}
