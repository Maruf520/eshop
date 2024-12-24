import { Component } from '@angular/core';
import { Category } from '../../types/category.type';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
import { CategoryStoreItem } from '../../services/categories.storeitmes';

@Component({
  selector: 'app-catnavigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catnavigation.component.html',
  styleUrl: './catnavigation.component.scss',
})
export class CatnavigationComponent {
  constructor(public catgoryStore: CategoryStoreItem) {}
}
