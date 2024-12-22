import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { CatnavigationComponent } from './components/catnavigation/catnavigation.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HomeComponent,
    HeaderComponent,
    CatnavigationComponent,
  ],
})
export class HomeModule {}
