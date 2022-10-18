import { IBadge } from './badge.interface';
export interface ISavedBeer {
  id: number;
  quantity: number;
  price?: number;
  content?: number;
  onSale: number;
  badges: IBadge[];
}
