import { IBeer } from './beer.interface';

export interface IBeerOperator extends Function {
  (beers: IBeer[]): IBeer[];
}
