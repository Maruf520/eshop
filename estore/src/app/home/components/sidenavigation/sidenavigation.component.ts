import { Component, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Category } from '../../types/category.type';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { CategoryStoreItem } from '../../services/category/categories.storeitmes';

@Component({
  selector: 'app-sidenavigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenavigation.component.html',
  styleUrl: './sidenavigation.component.scss',
})
export class SidenavigationComponent implements OnDestroy {
  @Output()
  subCategoryClicked: EventEmitter<number> = new EventEmitter<number>();
  categories: Category[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(categoryStore: CategoryStoreItem) {
    this.subscriptions.add(
      categoryStore.categories$.subscribe((categories) => {
        this.categories = categories;
      })
    );
  }
  getCategories(parentCategoryId?: number) {
    return parentCategoryId === undefined
      ? this.categories
      : this.categories.filter(
          (category) => category.parent_category_id === parentCategoryId
        );
  }

  onSubCategoryClick(subCategory: Category): void {
    this.subCategoryClicked.emit(subCategory.id);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
