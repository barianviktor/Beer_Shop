import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, delay } from 'rxjs';
import { IBeer } from '../interfaces/beer.interface';
import { BeerSearchParameters } from '../interfaces/BeerSearchParameters';
import { IBeerSearchParameters } from '../interfaces/beerSearchParameters.interface';
import { BeerService } from './beer.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  beers$ = new BehaviorSubject<IBeer[]>([]);
  searchParameters: IBeerSearchParameters = new BeerSearchParameters();

  hops: string[] = [
    'amarillo',
    'centennial',
    'chinook',
    'citra',
    'columbus',
    'comet',
    'mosaic',
    'simcoe',
    'sorachi_ace',
  ];

  malts: string[] = [
    'pilsner',
    'dextrin_malt',
    'extra_pale',
    'flaked_oats',
    'munich',
    'caramalt',
    'dark_crystal',
    'amber',
  ];
  /*  scrollIsActive: boolean = true;
  currentlyFetching: boolean = true; */
  scrollIsActive$ = new BehaviorSubject<boolean>(true);
  currentlyFetching$ = new BehaviorSubject<boolean>(true);
  constructor(private beerService: BeerService) {}
  getBeersBySearchParameters(): void {
    this.currentlyFetching$.next(true);
    console.log('fetching', this.currentlyFetching$.getValue());

    console.log('scrollingisactive', this.scrollIsActive$.getValue());
    this.beerService
      .getBeersbySearchParameters$(this.searchParameters)
      .pipe(delay(3000))
      .subscribe((beers: IBeer[]) => {
        if (this.searchParameters.page > 1) {
          beers = this.beers$.getValue().concat(beers);
        }
        if (beers.length < this.searchParameters.per_page) {
          this.scrollIsActive$.next(false);
        }
        this.beers$.next(beers);
        this.currentlyFetching$.next(false);
        console.log('fetching', this.currentlyFetching$.getValue());

        console.log('scrollingisactive', this.scrollIsActive$.getValue());
      });
  }
  onHandleSearchName(beer_name: string): void {
    this.newFilterAdded();
    this.searchParameters.beer_name = beer_name;
    this.getBeersBySearchParameters();
  }
  onHandleHops(item: string): void {
    this.newFilterAdded();
    if (this.searchParameters.hops == item) {
      this.searchParameters.hops = undefined;
    } else {
      this.searchParameters.hops = item;
    }
    this.getBeersBySearchParameters();
  }
  onHandleMalts(item: string): void {
    this.newFilterAdded();
    if (this.searchParameters.malts == item) {
      this.searchParameters.malts = undefined;
    } else {
      this.searchParameters.malts = item;
    }
    console.log(item);

    this.getBeersBySearchParameters();
  }

  onHandleAlcoholRange(range: {
    abv_gt: number | undefined;
    abv_lt: number | undefined;
  }): void {
    this.newFilterAdded();
    if (range.abv_gt) {
      this.searchParameters.abv_gt = range.abv_gt;
    }
    if (range.abv_lt) {
      this.searchParameters.abv_lt = range.abv_lt;
    }
    this.getBeersBySearchParameters();
  }
  onHandleNextPage(): void {
    this.searchParameters.page = this.searchParameters.page + 1;
    this.getBeersBySearchParameters();
  }
  onResetToDefault(): void {
    this.searchParameters.hops = undefined;
    this.searchParameters.malts = undefined;
    this.searchParameters.beer_name = undefined;
    this.searchParameters.abv_gt = undefined;
    this.searchParameters.abv_lt = undefined;
    this.getBeersBySearchParameters();
  }
  newFilterAdded(): void {
    this.searchParameters.page = 1;
    this.scrollIsActive$.next(true);
  }
}
