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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchBeerForm: FormGroup<ISearchBeerFormInterface>;
  beerCards$: Observable<IBeerSearchCard[]>;
  constructor(
    private beerService: BeerService,
    private searchService: SearchService,
    private whislistService: WhislistService,
    private cartService: CartService
  ) {
    this.searchBeerForm = searchService.searchBeerForm;
    this.beerCards$ = this.beerService.getBeerSearchCards$();
  }
  castAbsContToFormContBool(control: AbstractControl): FormControl<boolean> {
    return control as FormControl<boolean>;
  }
  get hops(): FormGroup {
    return this.searchBeerForm.get('hops') as FormGroup;
  }
  get malts(): FormGroup {
    return this.searchBeerForm.get('malts') as FormGroup;
  }
  get abv_gt(): FormControl {
    return this.searchBeerForm.get('abv_gt') as FormControl;
  }
  get abv_lt(): FormControl {
    return this.searchBeerForm.get('abv_lt') as FormControl;
  }
  ngOnInit(): void {}
  onSetAlcoholRange(res: { abv_gt: string; abv_lt: string }) {
    this.abv_gt.setValue(res.abv_gt);
    this.abv_lt.setValue(res.abv_lt);
  }
  onResetToDefault() {
    console.log(this.searchBeerForm);
    console.log(this.searchService.searchBeerForm);
  }
  onHandleWhislist(beer: IBeerSearchCard) {
    this.whislistService.addOrRemoveFromList(beer);
  }
  isInWhislist(id: number) {
    return this.whislistService.isInTheList(id);
  }
  onHandleCart(cart: { beer: IBeerSearchCard; quantity: number }) {
    console.log(this.cartService.shoppingCart$.getValue());
    this.cartService.addToCart(cart.beer, cart.quantity);
    console.log(this.cartService.shoppingCart$.getValue());
  }
  deleteFilter(control: FormControl<boolean>) {
    control.setValue(false);
  }
}
