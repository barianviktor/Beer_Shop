import { BeerService } from './../../../../services/beer.service';
import { Observable, switchMap, tap } from 'rxjs';
import { CartService } from './../../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { IBeer } from 'src/app/interfaces/beer.interface';
import { ISavedBeer } from 'src/app/interfaces/savedBeer.interface';
import { ICartItem } from 'src/app/interfaces/cartItem';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  cartItems$: Observable<ICartItem[]>;
  constructor(private cartService: CartService) {
    this.cartItems$ = this.cartService.shoppingCart$; /* .pipe(
      switchMap((savedBeers: ISavedBeer[]) => {
        let ids: number[] = [];
        savedBeers.forEach((beer: ISavedBeer) => {
          ids.push(beer.id);
        });
        return this.beerService.getMultipleBeerFromIds$(ids);
      })
    ); */
  }

  ngOnInit(): void {}

  onDecrementQuantity(id: number) {
    console.log('decre');

    this.cartService.decreaseQuantity(id);
  }
  onIncrementQuantity(id: number) {
    this.cartService.increaseQuantity(id);
  }
  onRemoveItem(id: number) {
    this.cartService.removeFromCart(id);
  }
  getTotalCost(): number {
    return this.cartService.getTotalCost();
  }
  getItemsCost(): number {
    return this.cartService.getItemsCost();
  }
  getVatCost(): number {
    return this.cartService.getVatCost();
  }
  getShippingCost(): number {
    return this.cartService.billingOptions.shippingCost;
  }
  getFreeShippingFrom(): number {
    return this.cartService.billingOptions.freeShippingFrom;
  }
}
