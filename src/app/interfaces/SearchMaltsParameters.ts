import { ISearchMaltParameters } from './searchMaltsParameters.interface';

export class SearchMaltsParameters implements ISearchMaltParameters {
  pilsner: boolean = false;
  dextrin_malt: boolean = false;
  extra_pale: boolean = false;
  flaked_oats: boolean = false;
  munich: boolean = false;
  caramalt: boolean = false;
  dark_crystal: boolean = false;
  amber: boolean = false;
}
