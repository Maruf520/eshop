import { Component } from '@angular/core';
import { ProductStoreItem } from '../../services/product/product.storeItem';
import { ProductsComponent } from '../products/products.component';
import { SidenavigationComponent } from '../sidenavigation/sidenavigation.component';

@Component({
  selector: 'app-products-gallery',
  standalone: true,
  imports: [ProductsComponent, SidenavigationComponent],
  templateUrl: './products-gallery.component.html',
  styleUrl: './products-gallery.component.scss',
})
export class ProductsGalleryComponent {
  constructor(private productStoreItem: ProductStoreItem) {}

  onSelectSubCategory(subCategoryId: number): void {
    this.productStoreItem.loadProducts('subcategoryid=' + subCategoryId);
  }
}
