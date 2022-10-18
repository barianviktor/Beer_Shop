import { BeerService } from './beer.service';
import { IBeer } from './../interfaces/beer.interface';
import { ISavedBeer } from './../interfaces/savedBeer.interface';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';
import { IBeerSearchCard } from '../interfaces/beer-search-card.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  shoppingCart$ = new BehaviorSubject<ISavedBeer[]>([]);
  constructor() {}
  addToCart(beer: IBeer | IBeerSearchCard, quantity: number = 1): void {
    let list = this.shoppingCart$.getValue();

    if (this.isInTheList(beer.id)) {
      this.increaseQuantity(beer.id, quantity);
    } else {
      list.push({
        ...beer,
        quantity: quantity,
      });
    }

    this.shoppingCart$.next(list);
  }
  removeFromCart(id: number): void {
    let list = this.shoppingCart$.getValue();
    list.splice(
      list.findIndex((beer: ISavedBeer) => beer.id == id),
      1
    );
    this.shoppingCart$.next(list);
  }
  isInTheList(id: number): boolean {
    let list = this.shoppingCart$.getValue();
    if (list.find((beer: ISavedBeer) => beer.id == id)) {
      return true;
    } else {
      return false;
    }
  }
  increaseQuantity(id: number, quantity: number = 1): void {
    let list = this.shoppingCart$.getValue();
    let beer = list.find((beer: ISavedBeer) => beer.id == id);
    if (beer) {
      beer.quantity = beer.quantity + quantity;
    }
  }
  decreaseQuantity(id: number): void {
    let list = this.shoppingCart$.getValue();
    list.splice(
      list.findIndex((beer: ISavedBeer) => beer.id == id),
      1
    );
    this.shoppingCart$.next(list);
  }
}
