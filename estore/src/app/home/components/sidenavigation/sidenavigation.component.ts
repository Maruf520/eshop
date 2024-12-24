import { Component } from '@angular/core';
import { Category } from '../../types/category.type';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenavigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenavigation.component.html',
  styleUrl: './sidenavigation.component.scss',
})
export class SidenavigationComponent {
  categories: Category[] = [];
  constructor(categoryServices: CategoryService) {
    categoryServices.getAllCategories().subscribe((categories) => {
      console.log(categories);
      this.categories = categories;
    });
  }
  getCategories(parentCategoryId?: number) {
    return parentCategoryId === undefined
      ? this.categories
      : this.categories.filter(
          (category) => category.parent_category_id === parentCategoryId
        );
  }
}
