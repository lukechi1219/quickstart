import { Component, Input } from '@angular/core';
import { Hero } from './app.models';

/**
 * Created by Luke.Chi on 2017/3/13.
 */
@Component({
  selector: 'my-hero-detail',
  templateUrl: 'templates/hero-detail.html',
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
