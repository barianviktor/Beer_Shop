export interface IBeerSearchParameters {
  beer_name?: string;
  abv_gt?: number;
  abv_lt?: number;
  hops?: string;
  malts?: string;
  page: number;
  per_page: number;
}
