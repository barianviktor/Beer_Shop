import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-card',
  templateUrl: './add-to-cart-card.component.html',
  styleUrls: ['./add-to-cart-card.component.scss'],
})
export class AddToCartCardComponent implements OnInit {
  @Input() price?: number = 5;
  @Input() onSale: number = 0;
  quantity: number = 1;
  @Output() addToCart = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  onAddToCart() {
    this.addToCart.emit(this.quantity);
  }
  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  increment() {
    this.quantity++;
  }
  onChanged(value: number) {
    console.log(value);

    if (value > 0) {
      this.quantity = value;
    } else {
      this.quantity = 1;
    }
    console.log(this.quantity);
  }
  handleAddToCart() {
    console.log('handleAddToCart');

    if (this.quantity > 0) {
      this.addToCart.emit(this.quantity);
    } else {
      this.quantity = 1;
    }
  }
}
