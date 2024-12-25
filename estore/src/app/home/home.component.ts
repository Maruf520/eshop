import { Component } from '@angular/core';
import { CatnavigationComponent } from './components/catnavigation/catnavigation.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryStoreItem } from './services/category/categories.storeitmes';
import { ProductStoreItem } from './services/product/product.storeItem';
import { Category } from './types/category.type';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CatnavigationComponent,
    HeaderComponent,
    SidenavigationComponent,
    ProductsComponent,
  ],
  providers: [CategoryStoreItem, ProductStoreItem],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private categoryStoreItem: CategoryStoreItem,
    private productStoreItem: ProductStoreItem
  ) {
    this.categoryStoreItem.loadCategories();
    this.productStoreItem.loadProducts();
  }

  onSelectSubCategory(subCategoryId: number): void {
    this.productStoreItem.loadProducts('subcategoryid=' + subCategoryId);
  }
  onSelectCategory(category: number): void {
    this.productStoreItem.loadProducts('maincategoryid=' + category);
  }
}
