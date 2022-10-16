import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-badge',
  templateUrl: './sale-badge.component.html',
  styleUrls: ['./sale-badge.component.scss'],
})
export class SaleBadgeComponent implements OnInit {
  @Input() text: string = 'Sale';
  @Input() width: string = 'auto';
  @Input() borderRadius: string = '4px';
  constructor() {}

  ngOnInit(): void {}
}
