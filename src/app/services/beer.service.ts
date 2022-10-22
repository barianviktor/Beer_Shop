import { IBeerSearchParameters } from './../interfaces/beerSearchParameters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from './../../environments/environment';
import { IBeer } from './../interfaces/beer.interface';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  API = environment.api + '/beers';
  constructor(private http: HttpClient) {}

  getBeersbySearchParameters$(
    searchParams: IBeerSearchParameters
  ): Observable<IBeer[]> {
    let query: any = {};
    if (searchParams.beer_name) {
      query.beer_name = searchParams.beer_name;
    }
    if (searchParams.per_page) {
      query.per_page = searchParams.per_page;
    }
    if (searchParams.page) {
      query.page = searchParams.page;
    }
    if (searchParams.hops) {
      query.hops = searchParams.hops;
    }
    if (searchParams.malts) {
      query.malts = searchParams.malts;
    }
    if (searchParams.abv_lt) {
      query.abv_lt = searchParams.abv_lt;
    }
    if (searchParams.abv_gt) {
      query.abv_gt = searchParams.abv_gt;
    }

    return this.http
      .get<IBeer[]>(this.API, {
        params: query,
      })
      .pipe(
        map((beers: IBeer[]) => {
          if (beers) {
            beers.forEach((beer: IBeer) => {
              beer = this.giveBeerBonusCredentials(beer);
            });
            return beers;
          } else {
            return [];
          }
        })
      );
  }

  getBeersByIds$(ids: number[]): Observable<IBeer[]> {
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
        if (beers) {
          beers.forEach((beer: IBeer) => {
            beer = this.giveBeerBonusCredentials(beer);
          });
          return beers;
        } else {
          return [];
        }
      })
    );
  }

  youMightAlsoLikeBeers$(contributor: string): Observable<IBeer[]> {
    return this.http
      .get<IBeer[]>(this.API, {
        params: {
          contributed_by: contributor,
          per_page: '15',
        },
      })
      .pipe(
        map((beers: IBeer[]) => {
          if (beers) {
            beers.forEach((beer: IBeer) => {
              beer = this.giveBeerBonusCredentials(beer);
            });
            return beers;
          } else {
            return [];
          }
        })
      );
  }

  giveBeerBonusCredentials(beer: IBeer): IBeer {
    beer.badges = [];
    beer.onSale = 0;
    beer.content = 0;
    beer.price = 0;
    if (beer.name.length % 8 == 0) {
      //out of stock
      beer.badges.push({
        id: 1,
        name: 'Sold out',
      });
    } else {
      //in stock
      beer.price = beer.name.length * 0.4;
      if (beer.id % 2 == 0) {
        beer.content = 0.5;
      } else {
        beer.content = 0.33;
      }
      if (beer.name.includes('t')) {
        beer.onSale = 10;
      }

      if (beer.name.includes('c')) {
        beer.onSale = 25;
      }

      if (beer.tagline.includes('k')) {
        beer.badges.push({
          id: 2,
          name: 'New',
        });
      } else {
        if (beer.tagline.includes('h')) {
          beer.badges.push({
            id: 3,
            name: 'Product of the week',
          });
        }
      }
    }

    return beer;
  }
  /* giveBeerBonusCredentials(beer: IBeer): IBeer {
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
  }  getRandomFloat(min: number, max: number, decimals: number) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
  }
  getRandomNumber(min: number, max: number) {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
  } */
}
