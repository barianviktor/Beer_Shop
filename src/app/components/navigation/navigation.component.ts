import { CartService } from './../../services/cart.service';
import { ISavedBeer } from './../../interfaces/savedBeer.interface';
import { Observable } from 'rxjs';
import { WhislistService } from './../../services/whislist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  whisList$: Observable<ISavedBeer[]>;
  cart$: Observable<ISavedBeer[]>;
  constructor(
    private whislistService: WhislistService,
    private cartService: CartService
  ) {
    this.whisList$ = this.whislistService.whistlist$;
    this.cart$ = this.cartService.shoppingCart$;
  }

  ngOnInit(): void {}
  goTo(path: string) {}
}
