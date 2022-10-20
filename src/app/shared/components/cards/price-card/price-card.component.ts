import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss'],
})
export class PriceCardComponent implements OnInit {
  @Input() price: number = 0;
  @Input() onSale: number = 0;
  @Input() quantity: number = 1;
  constructor() {}

  ngOnInit(): void {}
}
