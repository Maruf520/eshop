import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { CatnavigationComponent } from './components/catnavigation/catnavigation.component';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';
import { ProductsComponent } from './components/products/products.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HomeComponent,
    HeaderComponent,
    CatnavigationComponent,
    SidenavigationComponent,
    ProductsComponent,
  ],
})
export class HomeModule {}
