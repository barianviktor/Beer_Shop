import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-skelton-item]',
  templateUrl: './skelton-item.component.html',
  styleUrls: ['./skelton-item.component.scss'],
})
export class SkeltonItemComponent implements OnInit {
  @Input() width: string = '100%';
  @Input() height: string = '100%';
  constructor() {}

  ngOnInit(): void {}
}
