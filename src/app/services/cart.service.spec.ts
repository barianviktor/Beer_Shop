import { ICartItem } from 'src/app/interfaces/cartItem';
import { IBeer } from 'src/app/interfaces/beer.interface';
import { CartService } from 'src/app/services/cart.service';
import { TestBed } from '@angular/core/testing';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
    service.shoppingCart$.next([
      {
        item: {
          id: 1,
          image_url: 'string',
          tagline: 'string',
          name: 'string',
          contributed_by: 'string',
          description: 'string',
          food_pairing: [],
          brewers_tips: 'string',
          ingredients: {},
          abv: 'string',
          price: 1,
          content: 0.25,
          onSale: 0,
          badges: [
            {
              id: 1,
              name: 'string',
            },
          ],
          first_brewed: 'string',
        },
        quantity: 1,
      },
    ]);
  });

  it('should add a new item to the shopping cart ', () => {
    const newItem: IBeer = {
      id: 2,
      image_url: 'string',
      tagline: 'string',
      name: 'string',
      contributed_by: 'string',
      description: 'string',
      food_pairing: [],
      brewers_tips: 'string',
      ingredients: {},
      abv: 'string',
      price: 1,
      content: 0.25,
      onSale: 0,
      badges: [
        {
          id: 1,
          name: 'string',
        },
      ],
      first_brewed: 'string',
    };
    let cartItem: ICartItem = {
      item: newItem,
      quantity: 2,
    };
    service.addToCart(cartItem);
    expect(service.shoppingCart$.getValue().length).toBe(2);
  });
  it('should add an existing item to the cart ', () => {
    const newItem: IBeer = {
      id: 1,
      image_url: 'string',
      tagline: 'string',
      name: 'string',
      contributed_by: 'string',
      description: 'string',
      food_pairing: [],
      brewers_tips: 'string',
      ingredients: {},
      abv: 'string',
      price: 1,
      content: 0.25,
      onSale: 0,
      badges: [
        {
          id: 1,
          name: 'string',
        },
      ],
      first_brewed: 'string',
    };
    let cartItem: ICartItem = {
      item: newItem,
      quantity: 2,
    };
    service.addToCart(cartItem);
    expect(service.shoppingCart$.getValue().length).toBe(1);
  });
  it('should remove an item from the cart ', () => {
    service.removeFromCart(1);
    expect(service.shoppingCart$.getValue().length).toBe(0);
  });
  it('should determine if item is in the cart', () => {
    expect(service.isInTheList(1)).toBeTrue();
  });
});
