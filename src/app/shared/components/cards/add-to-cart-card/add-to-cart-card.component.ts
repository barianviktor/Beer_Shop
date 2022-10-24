import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-to-cart-card',
  templateUrl: './add-to-cart-card.component.html',
  styleUrls: ['./add-to-cart-card.component.scss'],
})
export class AddToCartCardComponent implements OnInit {
  cartFormGroup: FormGroup = new FormGroup({
    quantity: new FormControl(1, [Validators.required, Validators.min(1)]),
  });
  get quantity(): FormControl {
    return this.cartFormGroup.get('quantity') as FormControl;
  }
  @Input() price: number = 5;
  @Input() onSale: number = 0;
  @Output() addToCart = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  decrement() {
    /*  if (this.quantity > 1) {
      this.quantity--;
    } */
    if (this.quantity.value > 1) {
      this.quantity.setValue(this.quantity.value - 1);
    }
  }
  increment() {
    /*   this.quantity++; */
    this.quantity.setValue(this.quantity.value + 1);
  }
  onChanged() {
    /* console.log(value);

    if (value > 0) {
      this.quantity = value;
    } else {
      this.quantity = 1;
    }
    console.log(this.quantity); */
    if (this.quantity.value < 1) {
      this.quantity.setValue(1);
    }
  }
  handleAddToCart() {
    /* console.log('handleAddToCart');

    if (this.quantity > 0) {
      this.addToCart.emit(this.quantity);
    } else {
      this.quantity = 1;
    } */
    if (this.cartFormGroup.valid) {
      this.addToCart.emit(this.quantity.value);
    }
  }
}
