import { IBeerSearchParameters } from './beerSearchParameters.interface';

export class BeerSearchParameters implements IBeerSearchParameters {
  hops = '';
  malts = '';
  beer_name = '';
  abv_gt = undefined;
  abv_lt = undefined;
  page = 1;
  per_page = 12;
}
