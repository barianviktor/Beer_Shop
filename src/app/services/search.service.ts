import { Injectable } from '@angular/core';
import { BeerSearchParameters } from '../interfaces/BeerSearchParameters';
import { IBeerSearchParameters } from '../interfaces/beerSearchParameters.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
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
  constructor() {}
  onHandleHops(item: string): void {
    console.log(item);

    if (this.searchParameters.hops.includes(item)) {
      this.searchParameters.hops.splice(
        this.searchParameters.hops.findIndex((el) => el === item),
        1
      );
    } else {
      this.searchParameters.hops.push(item);
    }
    console.log(this.searchParameters.hops);
  }
}
