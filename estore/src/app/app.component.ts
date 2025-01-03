import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeModule, HttpClientModule], // Correctly import components/modules
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Corrected the property name (from styleUrl to styleUrls)
})
export class AppComponent {
  title = 'estore';
}
