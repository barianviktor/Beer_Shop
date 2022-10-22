import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-icon',
  templateUrl: './custom-icon.component.html',
  styleUrls: ['./custom-icon.component.scss'],
})
export class CustomIconComponent implements OnInit {
  @Input() icon_path: string = 'assets/icons/';
  @Input() width: string = '25px';
  @Input() icon_class: string = 'icon';
  constructor() {}

  ngOnInit(): void {}
}
