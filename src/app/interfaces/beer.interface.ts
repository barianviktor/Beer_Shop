import { IBadge } from './badge.interface';

export interface IBeer {
  id: number;
  image_url: string;
  tagline: string;
  name: string;
  contributed_by: string;
  description: string;
  facts: {};
  price?: number;
  content?: number;
  onSale?: number;
  badges: IBadge[];
}
