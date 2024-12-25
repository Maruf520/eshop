import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryStoreItem } from '../../services/category/categories.storeitmes';
import { Category } from '../../types/category.type';

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
  constructor(public catgoryStore: CategoryStoreItem) {}

  onCategoryClicked(category: Category): void {
    this.categoryClicked.emit(category.id);
  }
}
