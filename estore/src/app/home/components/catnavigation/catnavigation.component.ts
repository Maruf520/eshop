import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryStoreItem } from '../../services/category/categories.storeitmes';

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
