import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBeerSearchCard } from '../interfaces/beer-search-card.interface';
import { IBeer } from './../interfaces/beer.interface';
import { ISavedBeer } from './../interfaces/savedBeer.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  shoppingCart$ = new BehaviorSubject<ISavedBeer[]>([
    {
      id: 1,
      onSale: 0,
      quantity: 2,
      badges: [],
      price: 5.2,
      content: 0.5,
    },
    {
      id: 2,
      onSale: 0,
      quantity: 1,
      badges: [],
      price: 3,
      content: 0.5,
    },
    {
      id: 3,
      onSale: 2,
      quantity: 4,
      badges: [],
      price: 5,
      content: 0.66,
    },
    {
      id: 4,
      onSale: 15,
      quantity: 1,
      badges: [],
      price: 12,
      content: 0.33,
    },
  ]);
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
    console.log('increaseQuantity');

    let list = this.shoppingCart$.getValue();
    let beer = list.find((beer: ISavedBeer) => beer.id == id);
    if (beer) {
      beer.quantity = beer.quantity + quantity;
      this.shoppingCart$.next(list);
    }
  }
  decreaseQuantity(id: number, quantity: number = 1): void {
    let list = this.shoppingCart$.getValue();
    let beer = list.find((beer: ISavedBeer) => beer.id == id);
    if (beer) {
      if (beer.quantity - quantity > 0) {
        beer.quantity = beer.quantity - quantity;
        this.shoppingCart$.next(list);
      } else {
        this.removeFromCart(id);
      }
    }
  }
}
