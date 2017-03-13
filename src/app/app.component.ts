import { Component } from '@angular/core';

import { Hero , HEROES } from './app.models';

@Component({
  selector: 'my-app',
  templateUrl: 'templates/part.html',
})
export class AppComponent  {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

