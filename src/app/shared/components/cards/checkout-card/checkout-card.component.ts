import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-card',
  templateUrl: './checkout-card.component.html',
  styleUrls: ['./checkout-card.component.scss'],
})
export class CheckoutCardComponent implements OnInit {
  @Input() itemsValue: number = 0;
  @Input() vat: number = 0;
  @Input() shipping: number = 0;
  @Input() freeShippingFrom: number = 0;
  @Input() total: number = 0;
  constructor() {}

  ngOnInit(): void {}

  /*   total() {
    if (this.itemsValue + this.vat >= this.freeShippingFrom) {
      return this.itemsValue + this.vat;
    } else {
      return this.itemsValue + this.vat + this.shipping;
    }
  } */
}
