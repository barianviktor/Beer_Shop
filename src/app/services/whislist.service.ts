import { ISavedBeer } from './../interfaces/savedBeer.interface';
import { IBeerSearchCard } from './../interfaces/beer-search-card.interface';
import { IBeer } from './../interfaces/beer.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WhislistService {
  whistlist$ = new BehaviorSubject<ISavedBeer[]>([]);
  constructor() {}
  addToList(beer: IBeer | IBeerSearchCard): void {
    let savedBeer: ISavedBeer = {
      ...beer,
      quantity: 1,
    };
    let list = this.whistlist$.getValue();
    list.push(savedBeer);
    this.whistlist$.next(list);
  }
  removeFromList(id: number): void {
    let list = this.whistlist$.getValue();
    list.splice(
      list.findIndex((beer: ISavedBeer) => {
        return beer.id == id;
      }),
      1
    );
    this.whistlist$.next(list);
  }
  isInTheList(id: number): boolean {
    let list = this.whistlist$.getValue();
    if (list.find((beer: ISavedBeer) => beer.id == id)) {
      return true;
    } else {
      return false;
    }
  }
  findBeerInTheList(id: number): ISavedBeer | undefined {
    let list = this.whistlist$.getValue();
    return list.find((beer: ISavedBeer) => beer.id == id);
  }
  addOrRemoveFromList(beer: IBeer | IBeerSearchCard): void {
    if (this.isInTheList(beer.id)) {
      this.removeFromList(beer.id);
    } else {
      this.addToList(beer);
    }
  }
}
