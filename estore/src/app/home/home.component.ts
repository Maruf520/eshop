import { Component } from '@angular/core';
import { CatnavigationComponent } from './components/catnavigation/catnavigation.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryStoreItem } from './services/categories.storeitmes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CatnavigationComponent,
    HeaderComponent,
    SidenavigationComponent,
    ProductsComponent,
  ],
  providers: [CategoryStoreItem],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private categoryStoreItem: CategoryStoreItem) {
    this.categoryStoreItem.loadCategories();
  }
}
