import { ICartItem } from 'src/app/interfaces/cartItem';
import { CartService } from 'src/app/services/cart.service';
import { Observable, switchMap, BehaviorSubject, tap, delay } from 'rxjs';
import { WhislistService } from 'src/app/services/whislist.service';
import { Component, OnInit } from '@angular/core';
import { IBeer } from 'src/app/interfaces/beer.interface';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-whislist',
  templateUrl: './whislist.component.html',
  styleUrls: ['./whislist.component.scss'],
})
export class WhislistComponent implements OnInit {
  beers$: Observable<IBeer[]>;
  constructor(
    private whislistService: WhislistService,
    private beerService: BeerService,
    private cartService: CartService
  ) {
    this.beers$ = this.whislistService.whistlist$.pipe(
      switchMap((ids: number[]) => {
        return this.beerService.getBeersByIds$(ids);
      }),
      delay(2000)
    );
  }

  ngOnInit(): void {}

  addToCart(cartItem: ICartItem) {
    this.cartService.addToCart(cartItem);
  }
  whisListHandler(id: number) {
    console.log(id);

    this.whislistService.addOrRemoveFromList(id);
  }
  isInTheWhislist(id: number) {
    return this.whislistService.isInTheList(id);
  }
}
