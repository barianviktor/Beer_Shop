import { ISearchHopsParameters } from './searchHopsParameters.interface';
import { ISearchMaltParameters } from './searchMaltsParameters.interface';

export interface IBeerSearchParameters {
  name: string;
  abv_gt: number;
  abv_lt: number;
  hops: string[];
  malts: string[];
}
