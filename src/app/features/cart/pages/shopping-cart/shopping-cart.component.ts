import { WhislistService } from './../../../../services/whislist.service';
import { RecentItemsService } from './../../../../services/recent-items.service';
import { BeerService } from './../../../../services/beer.service';
import { map, Observable, switchMap, tap } from 'rxjs';
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
  recentItems$: Observable<IBeer[]>;
  youMightAlsoLikeBeers$?: Observable<IBeer[]>;
  constructor(
    private cartService: CartService,
    private recentItemsService: RecentItemsService,
    private whislistService: WhislistService,
    private beerService: BeerService
  ) {
    this.cartItems$ = this.cartService.shoppingCart$.pipe(
      tap((cartItems: ICartItem[]) => {
        this.youMightAlsoLikeBeers$ = this.beerService.youMightAlsoLikeBeers$(
          cartItems[0].item.contributed_by
        );
      })
    );
    this.recentItems$ = this.recentItemsService.recentItems$.pipe(
      switchMap((ids: number[]) => {
        return this.beerService.getBeersByIds$(ids);
      })
    );
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
  onWhislistEmitter(id: number): void {
    this.whislistService.addOrRemoveFromList(id);
  }
  isInWhislist(id: number): boolean {
    return this.whislistService.isInTheList(id);
  }
}
