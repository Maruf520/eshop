import { Component } from '@angular/core';
import {
  faSearch,
  faUserCircle,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'; // Correctly import the icon
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Import FontAwesomeModule
import { CategoryStoreItem } from '../../services/category/categories.storeitmes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faSearch = faSearch;
  faserUserCirlce = faUserCircle;
  faShoppingCart = faShoppingCart;

  constructor(public categoryStoreItem: CategoryStoreItem) {}
}
