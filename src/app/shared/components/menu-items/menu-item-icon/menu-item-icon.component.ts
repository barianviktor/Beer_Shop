import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-item-icon',
  templateUrl: './menu-item-icon.component.html',
  styleUrls: ['./menu-item-icon.component.scss'],
})
export class MenuItemIconComponent implements OnInit {
  @Input() icon_path: string = 'assets/icons/user.svg';
  @Input() text: string = 'My Account';
  @Input() width: string = 'auto';
  @Input() borderRadius: string = '0px';
  @Output() itemClicked = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.itemClicked.emit();
  }
}
