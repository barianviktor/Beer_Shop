import { IBeer } from './../../../../interfaces/beer.interface';
import { CartService } from './../../../../services/cart.service';
import { WhislistService } from './../../../../services/whislist.service';
import { BeerService } from './../../../../services/beer.service';
import { IBeerSearchCard } from './../../../../interfaces/beer-search-card.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { ISearchBeerFormInterface } from 'src/app/interfaces/searchBeerForm.interface';
import { ISearchHopsFilterForm } from './../../../../interfaces/searchHopsFilterForm.interface';
import { SearchService } from './../../../../services/search.service';
import { IBeerSearchParameters } from 'src/app/interfaces/beerSearchParameters.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  beerCards$: Observable<IBeerSearchCard[]>;
  hops: string[] = [];
  malts: string[] = [];
  beerSearchParameters: IBeerSearchParameters;
  constructor(
    private beerService: BeerService,
    private searchService: SearchService,
    private whislistService: WhislistService,
    private cartService: CartService
  ) {
    this.beerCards$ = this.beerService.getBeerSearchCards$();
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
  onHandleWhislist(beer: IBeerSearchCard) {
    this.whislistService.addOrRemoveFromList(beer);
  }
  isInWhislist(id: number) {
    return this.whislistService.isInTheList(id);
  }
  onHandleCart(cart: { beer: IBeerSearchCard; quantity: number }) {
    this.cartService.addToCart(cart.beer, cart.quantity);
  }
  deleteFilter(control: FormControl<boolean>) {
    control.setValue(false);
  }
  onHandleHopsCheckbox(item: string): void {
    this.searchService.onHandleHops(item);
  }
}
