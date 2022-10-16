import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-of-the-week-badge',
  templateUrl: './product-of-the-week-badge.component.html',
  styleUrls: ['./product-of-the-week-badge.component.scss'],
})
export class ProductOfTheWeekBadgeComponent implements OnInit {
  @Input() text: string = 'Product of the week';
  @Input() width: string = 'auto';
  @Input() borderRadius: string = '4px';
  constructor() {}

  ngOnInit(): void {}
}
