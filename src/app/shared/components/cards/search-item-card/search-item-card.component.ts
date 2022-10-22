import { FormControl } from '@angular/forms';
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
  quantityControl = new FormControl<number>(1, { nonNullable: true });

  @Output() favoriteEmit = new EventEmitter<number>();
  @Output() cartEmit = new EventEmitter<ICartItem>();
  constructor() {}

  ngOnInit(): void {}

  onHearthClick(): void {
    this.favoriteEmit.emit(this.beer.id);
  }
  onCartClick(): void {
    this.cartEmit.emit({
      item: this.beer,
      quantity: this.quantityControl.value,
    });
  }
}
