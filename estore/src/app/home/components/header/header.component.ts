import { Component, EventEmitter, Output } from '@angular/core';
import {
  faSearch,
  faUserCircle,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'; // Correctly import the icon
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Import FontAwesomeModule
import { CategoryStoreItem } from '../../services/category/categories.storeitmes';
import { CommonModule } from '@angular/common';
import { SearchKeyword } from '../../types/searchKeyword.type';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { CartStoreItem } from '../../services/cart/cart.storeItem';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faSearch = faSearch;
  faserUserCirlce = faUserCircle;
  faShoppingCart = faShoppingCart;

  displaySearch: boolean = true;

  @Output()
  searchClicked = new EventEmitter<SearchKeyword>();
  constructor(
    public categoryStoreItem: CategoryStoreItem,
    private router: Router,
    public cartStore: CartStoreItem
  ) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.displaySearch =
          (event as NavigationEnd).url === '/home/products' ? true : false;
      });
  }

  onClickSearch(keyword: string, categoryId: string): void {
    this.searchClicked.emit({
      categoryId: parseInt(categoryId),
      keyword: keyword,
    });
  }
  navigateToCart(): void {
    this.router.navigate(['home/cart']);
  }
}
