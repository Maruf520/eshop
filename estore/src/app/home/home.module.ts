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
import { CategoryService } from './services/category/category.service';
import { CategoryStoreItem } from './services/category/categories.storeitmes';
import { ProductStoreItem } from './services/product/product.storeItem';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { CartStoreItem } from './services/cart/cart.storeItem';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/users/user-service.service';
import { OrderService } from './services/order/order.service';

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
    RouterModule,
    HomeRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    CategoryService,
    CategoryStoreItem,
    ProductStoreItem,
    CartStoreItem,
    UserService,
    OrderService,
  ],
})
export class HomeModule {}
