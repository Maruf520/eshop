import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryStoreItem } from '../../services/category/categories.storeitmes';
import { Category } from '../../types/category.type';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-catnavigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catnavigation.component.html',
  styleUrl: './catnavigation.component.scss',
})
export class CatnavigationComponent {
  @Output()
  categoryClicked = new EventEmitter<number>();
  displayOptions: boolean = true;
  constructor(public catgoryStore: CategoryStoreItem, private router: Router) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.displayOptions =
          (event as NavigationEnd).url === '/home/products' ? true : false;
      });
  }

  onCategoryClicked(category: Category): void {
    this.categoryClicked.emit(category.id);
  }
}
