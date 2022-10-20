import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { IBeer } from 'src/app/interfaces/beer.interface';
import { IBeerSearchParameters } from 'src/app/interfaces/beerSearchParameters.interface';
import { ICartItem } from 'src/app/interfaces/cartItem';
import { IBeerSearchCard } from './../../../../interfaces/beer-search-card.interface';
import { BeerService } from './../../../../services/beer.service';
import { CartService } from './../../../../services/cart.service';
import { SearchService } from './../../../../services/search.service';
import { WhislistService } from './../../../../services/whislist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  beers$: Observable<IBeer[]>;
  hops: string[] = [];
  malts: string[] = [];
  beerSearchParameters: IBeerSearchParameters;
  constructor(
    private beerService: BeerService,
    private searchService: SearchService,
    private whislistService: WhislistService,
    private cartService: CartService
  ) {
    /* this.beerCards$ = this.beerService.getBeerSearchCards$(); */
    this.beers$ = this.beerService.getBeers$();
    this.hops = this.searchService.hops;
    this.malts = this.searchService.malts;
    this.beerSearchParameters = this.searchService.searchParameters;
  }
  castAbsContToFormContBool(control: AbstractControl): FormControl<boolean> {
    return control as FormControl<boolean>;
  }

  ngOnInit(): void {}
  /*   onSetAlcoholRange(res: { abv_gt: string; abv_lt: string }) {
    this.abv_gt.setValue(res.abv_gt);
    this.abv_lt.setValue(res.abv_lt);
  }
  onResetToDefault() {
    console.log(this.searchBeerForm);
    console.log(this.searchService.searchBeerForm);
  } */
  onHandleWhislist(id: number) {
    this.whislistService.addOrRemoveFromList(id);
  }
  isInWhislist(id: number) {
    return this.whislistService.isInTheList(id);
  }
  onHandleCart(cartItem: ICartItem) {
    this.cartService.addToCart(cartItem);
  }
  deleteFilter(control: FormControl<boolean>) {
    control.setValue(false);
  }
  onHandleHopsCheckbox(item: string): void {
    this.searchService.onHandleHops(item);
  }
}
