import { IBeer } from './../interfaces/beer.interface';
import { environment } from './../../environments/environment';
import { IBeerSearchCard } from './../interfaces/beer-search-card.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  API = environment.api + '/beers';
  constructor(private http: HttpClient) {}

  getBeer$(id: number): Observable<IBeer> {
    return this.http.get<IBeer[]>(this.API + '/' + id).pipe(
      map((beers: IBeer[]) => {
        return this.giveBeerBonusCredentials(beers[0]);
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

  giveBeerBonusCredentials(beer: IBeer): IBeer {
    //price and content
    beer.badges = [];
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
