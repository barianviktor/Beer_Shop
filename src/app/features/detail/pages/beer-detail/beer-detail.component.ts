import { catchError, Observable, of, switchMap, tap, delay } from 'rxjs';
import { BeerService } from './../../../../services/beer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { IBeer } from 'src/app/interfaces/beer.interface';
import { CartService } from 'src/app/services/cart.service';
import { ICartItem } from 'src/app/interfaces/cartItem';
import { WhislistService } from 'src/app/services/whislist.service';
import { RecentItemsService } from 'src/app/services/recent-items.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss'],
})
export class BeerDetailComponent implements OnInit {
  beer$: Observable<IBeer>;
  customersAlsoBought$?: Observable<IBeer[]>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private beerService: BeerService,
    private cartService: CartService,
    private whislistService: WhislistService,
    private recentItemsService: RecentItemsService
  ) {
    this.beer$ = this.route.params.pipe(
      switchMap((params: Params) => this.beerService.getBeer$(params['id'])),
      catchError((err) => {
        this.router.navigate(['/']);
        throw err;
      }),
      delay(1000),
      tap((beer: IBeer) => {
        /* adding to recentlyitems subject */
        this.recentItemsService.addNewRecentItem(beer.id);
        this.customersAlsoBought$ = this.beerService.getCustomersAlsoBought$(
          parseFloat(beer.abv)
        );
      })
    );
  }
  onHandleFavorite(id: number) {
    this.whislistService.addOrRemoveFromList(id);
  }
  isInWhislist(id: number): boolean {
    return this.whislistService.isInTheList(id);
  }
  handleAddToCart(item: IBeer, quantity: number) {
    let cartItem: ICartItem = {
      quantity: quantity,
      item: item,
    };
    this.cartService.addToCart(cartItem);
  }
  ngOnInit(): void {}
  renderIngredients(ingredients: any): string {
    let listed_ingredients: string[] = [];
    ingredients.hops.forEach((item: any) => {
      if (!listed_ingredients.includes(item.name)) {
        listed_ingredients.push(item.name);
      }
    });
    ingredients.malt.forEach((item: any) => {
      if (!listed_ingredients.includes(item.name)) {
        listed_ingredients.push(item.name);
      }
    });
    if (!listed_ingredients.includes(ingredients.yeast)) {
      listed_ingredients.push(ingredients.yeast);
    }
    return listed_ingredients.join(', ');
  }
}
