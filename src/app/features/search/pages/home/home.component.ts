import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IBeer } from 'src/app/interfaces/beer.interface';
import { IBeerSearchParameters } from 'src/app/interfaces/beerSearchParameters.interface';
import { ICartItem } from 'src/app/interfaces/cartItem';
import { CartService } from './../../../../services/cart.service';
import { SearchService } from './../../../../services/search.service';
import { WhislistService } from './../../../../services/whislist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  beers$: BehaviorSubject<IBeer[]>;
  hops: string[] = [];
  malts: string[] = [];
  beerSearchParameters: IBeerSearchParameters;
  currentlyFetching$: BehaviorSubject<boolean>;
  scrollIsDisabled$: BehaviorSubject<boolean>;
  constructor(
    private searchService: SearchService,
    private whislistService: WhislistService,
    private cartService: CartService
  ) {
    this.beers$ = this.searchService.beers$;
    this.hops = this.searchService.hops;
    this.malts = this.searchService.malts;
    this.beerSearchParameters = this.searchService.searchParameters;
    this.currentlyFetching$ = this.searchService.currentlyFetching$;
    this.scrollIsDisabled$ = this.searchService.scrollIsDisabled$;
  }
  ngOnDestroy(): void {
    this.searchService.onResetToDefault();
  }

  ngOnInit(): void {
    this.searchService.getBeersBySearchParameters();
  }
  onScroll(): void {
    if (!this.currentlyFetching$.getValue()) {
      this.searchService.onHandleNextPage();
    }
  }
  onHandleWhislist(id: number): void {
    this.whislistService.addOrRemoveFromList(id);
  }
  isInWhislist(id: number): boolean {
    return this.whislistService.isInTheList(id);
  }
  onHandleCart(cartItem: ICartItem): void {
    this.cartService.addToCart(cartItem);
  }
  onHandleHops(item: string): void {
    this.searchService.onHandleHops(item);
  }
  onHandleMalts(item: string): void {
    this.searchService.onHandleMalts(item);
  }
  onResetToDefault(): void {
    this.searchService.onResetToDefault();
  }
  onHandleAlcoholRange(range: {
    abv_gt: number | undefined;
    abv_lt: number | undefined;
  }): void {
    this.searchService.onHandleAlcoholRange(range);
  }
}
