import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-badge',
  templateUrl: './new-badge.component.html',
  styleUrls: ['./new-badge.component.scss'],
})
export class NewBadgeComponent implements OnInit {
  @Input() text: string = 'New';
  @Input() width: string = 'auto';
  @Input() borderRadius: string = '4px';
  constructor() {}

  ngOnInit(): void {}
}
