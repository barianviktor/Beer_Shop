import { FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IBeer } from 'src/app/interfaces/beer.interface';
import { ICartItem } from 'src/app/interfaces/cartItem';

@Component({
  selector: 'app-search-item-card',
  templateUrl: './search-item-card.component.html',
  styleUrls: ['./search-item-card.component.scss'],
})
export class SearchItemCardComponent implements OnInit {
  @Input() beer!: IBeer;
  @Input() favorited: boolean = false;
  @Output() favoriteEmit = new EventEmitter<number>();
  @Output() cartEmit = new EventEmitter<ICartItem>();
  quantityControl = new FormControl<number>(1, {
    nonNullable: true,
    validators: [Validators.min(1)],
  });
  constructor() {}

  ngOnInit(): void {}

  onHearthClick(): void {
    this.favoriteEmit.emit(this.beer.id);
  }
  onCartClick(): void {
    console.log(this.quantityControl.value);

    if (this.quantityControl.valid && this.quantityControl.value > 0) {
      this.cartEmit.emit({
        item: this.beer,
        quantity: this.quantityControl.value,
      });
    }
  }
  onQuantityChange(value: string): void {
    if (parseInt(value) < 1) {
      this.quantityControl.setValue(1);
    }
  }
}
