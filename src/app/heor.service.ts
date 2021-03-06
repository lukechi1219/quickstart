import { Injectable } from '@angular/core';
import { Hero } from './app.models';
import { HEROES } from './mock-heroes';

/**
 * Created by Luke.Chi on 2017/3/22.
 */

@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  };

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}
