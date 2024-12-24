import { StoreItem } from '../../shared/storeItem';
import { categories } from '../sampleData/category.type';
import { Category } from '../types/category.type';
import { CategoryService } from './category.service';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable()
export class CategoryStoreItem extends StoreItem<Category[]> {
  constructor(private categoryServicve: CategoryService) {
    super([]);
  }
  async loadCategories() {
    this.categoryServicve.getAllCategories().subscribe((categories) => {
      this.setValue(categories);
    });
  }

  get categories$(): Observable<Category[]> {
    return this.value$;
  }

  get topLevelCategories$(): Observable<Category[]> {
    return this.value$.pipe(
      map((categories) =>
        categories.filter((category) => category.parent_category_id === null)
      )
    );
  }
}
