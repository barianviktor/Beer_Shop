import { IBeerSearchParameters } from './beerSearchParameters.interface';

export class BeerSearchParameters implements IBeerSearchParameters {
  hops: string[] = [];
  malts: string[] = [];
  name = '';
  abv_gt = 0;
  abv_lt = 0;
}
