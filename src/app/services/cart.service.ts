import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { ICartItem } from '../interfaces/cartItem';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  shoppingCart$ = new BehaviorSubject<ICartItem[]>([]);

  cartIsUpdated$ = new Subject<void>();
  billingOptions = {
    vatPercent: 0.27,
    shippingCost: 10,
    freeShippingFrom: 500,
  };
  constructor(private notificationService: NotificationService) {}

  addToCart(cartItem: ICartItem): void {
    let list = this.shoppingCart$.getValue();
    if (this.isInTheList(cartItem.item.id)) {
      this.increaseQuantity(cartItem.item.id, cartItem.quantity);
    } else {
      list.push(cartItem);
    }

    this.notificationService.successNotification(
      'You added ' + cartItem.item.name + ' in ',
      {
        message: 'your cart',
        linkTo: ['/shopping-cart'],
      }
    );
    this.shoppingCart$.next(list);
    this.cartIsUpdated$.next();
  }
  removeFromCart(id: number): void {
    let list = this.shoppingCart$.getValue();
    list.splice(
      list.findIndex((cartItem: ICartItem) => cartItem.item.id == id),
      1
    );
    this.shoppingCart$.next(list);
    this.cartIsUpdated$.next();
  }
  isInTheList(id: number): boolean {
    let list = this.shoppingCart$.getValue();
    if (list.findIndex((cartItem: ICartItem) => cartItem.item.id == id) >= 0) {
      return true;
    } else {
      return false;
    }
  }
  increaseQuantity(id: number, quantity: number = 1): void {
    let list = this.shoppingCart$.getValue();
    let beer = list.find((cartItem: ICartItem) => cartItem.item.id == id);
    if (beer) {
      beer.quantity = beer.quantity + quantity;
      this.shoppingCart$.next(list);
      this.cartIsUpdated$.next();
    }
  }
  decreaseQuantity(id: number, quantity: number = 1): void {
    let list = this.shoppingCart$.getValue();
    let beer = list.find((cartItem: ICartItem) => cartItem.item.id == id);
    if (beer) {
      if (beer.quantity - quantity > 0) {
        beer.quantity = beer.quantity - quantity;
        this.shoppingCart$.next(list);
        this.cartIsUpdated$.next();
      } else {
        this.removeFromCart(id);
      }
    }
  }
  getItemsCost(): number {
    let list = this.shoppingCart$.getValue();
    let cost = 0;
    list.forEach((cartItem: ICartItem) => {
      cost +=
        (cartItem.item.price *
          (100 - cartItem.item.onSale) *
          cartItem.quantity) /
        100;
    });

    return cost;
  }
  getShippingCost(): number {
    return this.billingOptions.shippingCost;
  }
  getVatCost(): number {
    return this.getItemsCost() * this.billingOptions.vatPercent;
  }
  getTotalCost(): number {
    let cost = this.getItemsCost() + this.getVatCost() + this.getShippingCost();
    if (cost >= this.billingOptions.freeShippingFrom) {
      return cost - this.getShippingCost();
    } else {
      return cost;
    }
  }
}
