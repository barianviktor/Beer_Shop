import { ISavedBeer } from './../../../../interfaces/savedBeer.interface';
import { FormControl } from '@angular/forms';
import { IBeerSearchCard } from 'src/app/interfaces/beer-search-card.interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-item-card',
  templateUrl: './search-item-card.component.html',
  styleUrls: ['./search-item-card.component.scss'],
})
export class SearchItemCardComponent implements OnInit {
  @Input() beer!: IBeerSearchCard;
  @Input() favourited: boolean = false;
  quantityControl = new FormControl<number>(1, { nonNullable: true });

  @Output() favouriteEmit = new EventEmitter<IBeerSearchCard>();
  @Output() cartEmit = new EventEmitter<{
    beer: IBeerSearchCard;
    quantity: number;
  }>();
  constructor() {}

  ngOnInit(): void {}

  onHearthClick(): void {
    this.favouriteEmit.emit(this.beer);
  }
  onCartClick(): void {
    this.cartEmit.emit({
      beer: this.beer,
      quantity: +this.quantityControl.value,
    });
  }
}
