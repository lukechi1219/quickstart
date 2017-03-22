import {Component, OnInit} from '@angular/core';

import { Hero } from './app.models';
import { HeroService } from './heor.service';

@Component({
  selector: 'my-app',
  templateUrl: 'templates/hero-main.html',
  providers: [ HeroService ],
})
export class AppComponent implements OnInit {

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  getHeros(): void {
    this.heroService.getHeroes().then(heroData => this.heroes = heroData);
//    this.heroService.getHeroesSlowly().then(heroData => this.heroes = heroData);
  }

  ngOnInit(): void {
    this.getHeros();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

