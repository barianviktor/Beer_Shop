import { CartService } from 'src/app/services/cart.service';
import { WhislistService } from './../../../services/whislist.service';
import { ICartItem } from './../../../interfaces/cartItem';
import { IBeer } from './../../../interfaces/beer.interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-carousel',
  templateUrl: './item-carousel.component.html',
  styleUrls: ['./item-carousel.component.scss'],
})
export class ItemCarouselComponent implements OnInit {
  @Input() items: IBeer[] = [];
  currentStepValue = 0;
  stepValue = 3;
  @Output() whislistEmitter = new EventEmitter<number>();
  @Output() cartEmitter = new EventEmitter<ICartItem>();
  ngOnInit(): void {}

  constructor(
    private whislistService: WhislistService,
    private cartService: CartService
  ) {}

  visibleItems() {
    return this.items.slice(
      this.currentStepValue,
      this.currentStepValue + this.stepValue
    );
  }
  next(): void {
    if (this.currentStepValue + this.stepValue < this.items.length) {
      this.currentStepValue += this.stepValue;
    }
  }
  previous(): void {
    if (this.currentStepValue - this.stepValue >= 0) {
      this.currentStepValue -= this.stepValue;
    }
  }
  makeDots(): number[] {
    let dots = [];
    for (let i = 0; i < this.items.length / this.stepValue; i++) {
      dots.push(i);
    }
    return dots;
  }
  setCurrent(value: number): void {
    this.currentStepValue = value * this.stepValue;
  }

  onAddToWishlist(id: number): void {
    this.whislistService.addOrRemoveFromList(id);
    console.log(this.whislistService.whistlist$.value);
  }
  onAddToCart(item: ICartItem): void {
    this.cartService.addToCart(item);
  }
  itemIsOnWishlist(id: number): boolean {
    return this.whislistService.isInTheList(id);
  }
}
