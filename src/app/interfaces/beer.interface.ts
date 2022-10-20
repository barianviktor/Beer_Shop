import { IBadge } from './badge.interface';

export interface IBeer {
  id: number;
  image_url: string;
  tagline: string;
  name: string;
  contributed_by: string;
  description: string;
  food_pairing: string[];
  brewers_tips: string;
  ingredients: any;
  abv: string;
  price: number;
  content: number;
  onSale: number;
  badges: IBadge[];
  first_brewed: string;
}
