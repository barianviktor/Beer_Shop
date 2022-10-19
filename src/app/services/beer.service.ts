import { ISavedBeer } from './../interfaces/savedBeer.interface';
import { CartService } from './cart.service';
import { WhislistService } from './whislist.service';
import { IBeer } from './../interfaces/beer.interface';
import { environment } from './../../environments/environment';
import { IBeerSearchCard } from './../interfaces/beer-search-card.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  API = environment.api + '/beers';
  constructor(
    private http: HttpClient,
    private whislistService: WhislistService,
    private cartService: CartService
  ) {}

  getMultipleBeerFromIds$(ids: number[]): Observable<IBeer[]> {
    if (ids.length > 0) {
      console.log(this.API + '/' + ids.join('|'));

      return this.http.get<IBeer[]>(this.API + '?ids=' + ids.join('|')).pipe(
        map((beers: IBeer[]) => {
          beers.forEach((beer: IBeer) => {
            beer = this.giveBeerBonusCredentials(beer);
          });
          return beers;
        })
      );
    } else {
      return of([]);
    }
  }
  getBeer$(id: number): Observable<IBeer> {
    return this.http.get<IBeer[]>(this.API + '/' + id).pipe(
      map((beers: IBeer[]) => {
        return this.giveBeerBonusCredentials(beers[0]);
      })
    );
  }
  getBeers$(): Observable<IBeer[]> {
    return this.http.get<IBeer[]>(this.API).pipe(
      map((beers: IBeer[]) => {
        beers.forEach((beer: IBeer) => {
          beer = this.giveBeerBonusCredentials(beer);
        });
        return beers;
      })
    );
  }

  getBeerSearchCard$(id: number): Observable<IBeerSearchCard> {
    return this.getBeer$(id).pipe(
      map((beer: IBeer) => {
        let beerSearchCard: IBeerSearchCard = {
          ...beer,
        };
        return beerSearchCard;
      })
    );
  }
  getBeerSearchCards$(): Observable<IBeerSearchCard[]> {
    return this.getBeers$().pipe(
      map((beers: IBeer[]) => {
        let searchCards: IBeerSearchCard[] = [];
        beers.forEach((beer: IBeer) => {
          searchCards.push({
            ...beer,
          });
        });
        return searchCards;
      })
    );
  }

  giveBeerBonusCredentials(beer: IBeer): IBeer {
    //price and content

    let whislist = this.whislistService.whistlist$.getValue();
    let cartItemsList = this.cartService.shoppingCart$.getValue();

    let whisBeer = whislist.find(
      (listedBeer: ISavedBeer) => beer.id == listedBeer.id
    );
    let cartBeer = cartItemsList.find((listedBeer: ISavedBeer) => {
      console.log(listedBeer.id, beer.id);

      return beer.id == listedBeer.id;
    });
    console.log(cartBeer);
    if (whisBeer) {
      beer.price = whisBeer.price;
      beer.content = whisBeer.content;
      beer.badges = whisBeer.badges;
      beer.content = whisBeer.content;
      beer.quantity = whisBeer.quantity;
      beer.onSale = whisBeer.onSale;
    } else if (cartBeer) {
      beer.price = cartBeer.price;
      beer.content = cartBeer.content;
      beer.badges = cartBeer.badges;
      beer.content = cartBeer.content;
      beer.quantity = cartBeer.quantity;
      beer.onSale = cartBeer.onSale;
    } else {
      beer.badges = [];
      beer.onSale = 0;
      if (beer.id % 6 != 0) {
        beer.price = this.getRandomFloat(5, 16, 2);
        switch (this.getRandomNumber(0, 3)) {
          case 0:
            beer.content = 0.33;
            break;
          case 1:
            beer.content = 0.44;
            break;
          case 2:
            beer.content = 0.5;
            break;
          default:
            beer.content = 0.66;
            break;
        }
        if (Math.random() > 0.7) {
          //on sale
          beer.onSale = this.getRandomNumber(5, 35);
        }
        if (Math.random() > 0.8) {
          //new

          beer.badges.push({
            id: 2,
            name: 'New',
          });
        } else {
          if (Math.random() > 0.8) {
            //product of the week

            beer.badges.push({
              id: 3,
              name: 'Product of the week',
            });
          }
        }
      } else {
        //out of stock
        beer.badges.push({
          id: 1,
          name: 'Sold Out',
        });
      }
    }
    console.log(beer);

    return beer;
  }

  getRandomFloat(min: number, max: number, decimals: number) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
  }
  getRandomNumber(min: number, max: number) {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
  }
}
