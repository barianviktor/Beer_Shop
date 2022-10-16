import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sold-out-badge',
  templateUrl: './sold-out-badge.component.html',
  styleUrls: ['./sold-out-badge.component.scss'],
})
export class SoldOutBadgeComponent implements OnInit {
  @Input() text: string = 'Sold out';
  @Input() width: string = 'auto';
  @Input() borderRadius: string = '4px';
  constructor() {}

  ngOnInit(): void {}
}
