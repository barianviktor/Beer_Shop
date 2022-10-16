import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent implements OnInit {
  @Input() icon_path: string = 'assets/icons/shopping.svg';
  @Input() text: string = 'Add to cart';
  @Input() disabled: boolean = false;
  @Input() width: string = 'auto';
  @Input() borderRadius: string = '4px';
  @Output() buttonClicked = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  handleClick() {
    this.buttonClicked.emit();
  }
}
