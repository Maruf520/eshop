import { Component, Input } from '@angular/core';
import {
  faStar,
  faStarHalfStroke,
  IconDefinition,
} from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Import FontAwesomeModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss',
})
export class RatingsComponent {
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
  faStarEmpty = faStarEmpty;

  stars: IconDefinition[] = [];
  private _score: number = 0;

  @Input()
  set score(val: number) {
    this._score = val > 5 ? 5 : val;
    const solidStarCount: number = Math.floor(this._score);
    for (let i: number = 0; i < solidStarCount; i++) {
      this.stars.push(faStar);
    }

    if (this._score - solidStarCount > 0 && this._score - solidStarCount < 1) {
      this.stars.push(faStarHalfStroke);
    }

    for (let i: number = this.stars.length; i < 5; i++) {
      this.stars.push(faStarEmpty);
    }
  }
}
