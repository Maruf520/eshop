import { Component } from '@angular/core';
import { CatnavigationComponent } from './components/catnavigation/catnavigation.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CatnavigationComponent, HeaderComponent, SidenavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
