import { CartService } from './../../services/cart.service';
import { ISavedBeer } from './../../interfaces/savedBeer.interface';
import { Observable } from 'rxjs';
import { WhislistService } from './../../services/whislist.service';
import { Component, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/cartItem';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  whisList$: Observable<number[]>;
  cart$: Observable<ICartItem[]>;
  constructor(
    private whislistService: WhislistService,
    private cartService: CartService,
    private searchService: SearchService
  ) {
    this.whisList$ = this.whislistService.whistlist$;
    this.cart$ = this.cartService.shoppingCart$;
  }
  onSearch(search: string): void {
    this.searchService.onHandleSearchName(search);
  }
  ngOnInit(): void {}
  goTo(path: string) {}
}
