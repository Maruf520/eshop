import { Component } from '@angular/core';
import {
  faSearch,
  faUserCircle,
  faHeart,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'; // Correctly import the icon
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Import FontAwesomeModule

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faSearch = faSearch;
  faserUserCirlce = faUserCircle;
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;
}
