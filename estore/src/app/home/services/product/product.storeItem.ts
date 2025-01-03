import { StoreItem } from '../../../shared/storeItem';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { Product } from '../../types/products.type';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductStoreItem extends StoreItem<Product[]> {
  constructor(private productService: ProductsService) {
    super([]);
  }
  async loadProducts(query?: string) {
    this.productService.getProducts(query).subscribe((products) => {
      this.setValue(products);
    });
  }

  get products$(): Observable<Product[]> {
    return this.value$;
  }

  get products(): Product[] {
    return this.value;
  }
}
