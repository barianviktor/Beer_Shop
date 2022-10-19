import { SearchBeerForm } from 'src/app/interfaces/SearchBeerForm';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ISearchBeerFormInterface } from '../interfaces/searchBeerForm.interface';
import { IBeerSearchParameters } from '../interfaces/beerSearchParameters.interface';
import { BeerSearchParameters } from '../interfaces/BeerSearchParameters';

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
  constructor() {
    console.log(this.searchParameters);
  }
}
