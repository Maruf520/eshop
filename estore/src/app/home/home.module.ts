import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { CatnavigationComponent } from './components/catnavigation/catnavigation.component';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';
import { ProductsComponent } from './components/products/products.component';
import { RatingsComponent } from '../shared/components/ratings/ratings.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryService } from './services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoryStoreItem } from './services/categories.storeitmes';

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
    RatingsComponent,
    SharedModule,
  ],
  providers: [CategoryService, CategoryStoreItem],
})
export class HomeModule {}
