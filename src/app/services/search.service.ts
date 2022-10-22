import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  constructor(private beerService: BeerService) {}
  getBeersBySearchParameters(): void {
    this.beerService
      .getBeersbySearchParameters$(this.searchParameters)
      .subscribe((beers: IBeer[]) => {
        this.beers$.next(beers);
      });
  }
  onHandleSearchName(beer_name: string): void {
    this.searchParameters.beer_name = beer_name;
    this.getBeersBySearchParameters();
  }
  onHandleHops(item: string): void {
    if (this.searchParameters.hops == item) {
      this.searchParameters.hops = undefined;
    } else {
      this.searchParameters.hops = item;
    }
    this.getBeersBySearchParameters();
  }
  onHandleMalts(item: string): void {
    if (this.searchParameters.malts == item) {
      this.searchParameters.malts = undefined;
    } else {
      this.searchParameters.malts = item;
    }
    this.getBeersBySearchParameters();
  }

  onHandleAlcoholRange(range: {
    abv_gt: number | undefined;
    abv_lt: number | undefined;
  }): void {
    if (range.abv_gt) {
      this.searchParameters.abv_gt = range.abv_gt;
    }
    if (range.abv_lt) {
      this.searchParameters.abv_lt = range.abv_lt;
    }
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
}
