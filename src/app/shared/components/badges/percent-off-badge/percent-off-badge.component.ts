import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-percent-off-badge',
  templateUrl: './percent-off-badge.component.html',
  styleUrls: ['./percent-off-badge.component.scss'],
})
export class PercentOffBadgeComponent implements OnInit {
  @Input() percent: number = 0;
  @Input() width: string = 'auto';
  @Input() borderRadius: string = '4px';
  constructor() {}

  ngOnInit(): void {}
}
