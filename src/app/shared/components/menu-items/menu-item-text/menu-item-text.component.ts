import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item-text',
  templateUrl: './menu-item-text.component.html',
  styleUrls: ['./menu-item-text.component.scss'],
})
export class MenuItemTextComponent implements OnInit {
  @Input() text: string = 'bestsellers';
  @Input() borderRadius: string = '0px';
  @Input() width: string = 'auto';
  @Input() active: boolean = false;
  @Output() itemClicked = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  onItemClicked() {
    this.itemClicked.emit();
  }
}
