import { IBeer } from 'src/app/interfaces/beer.interface';
import { ISavedBeer } from './../../../../interfaces/savedBeer.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/cartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: ICartItem;
  @Input() favorited: boolean = false;
  @Output() increaseQuantity = new EventEmitter<number>();
  @Output() decreaseQuantity = new EventEmitter<number>();
  @Output() removeItem = new EventEmitter<void>();
  @Output() whislistEmitter = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {
    console.log(this.cartItem);
  }
  addToWhislist() {
    this.whislistEmitter.emit();
  }
  deleteItem() {
    this.removeItem.emit();
  }
  onIncrementClick() {
    console.log('increment');

    this.increaseQuantity.emit(this.cartItem.item.id);
  }
  onDecrementClick() {
    this.decreaseQuantity.emit(this.cartItem.item.id);
  }
}
