import { IBadge } from './badge.interface';

export interface IBeerSearchCard {
  id: number;
  image_url: string;
  contributed_by: string;
  name: string;
  tagline: string;
  price?: number;
  content?: number;
  badges: IBadge[];
  onSale?: number;
}
