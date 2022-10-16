import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-icon-only-button',
  templateUrl: './icon-only-button.component.html',
  styleUrls: ['./icon-only-button.component.scss'],
})
export class IconOnlyButtonComponent implements OnInit {
  @Input() icon_path: string = 'assets/icons/navigation.svg';
  @Input() disabled: boolean = false;
  @Input() width: string = '40px';
  @Input() borderRadius: string = '4px';
  @Output() buttonClicked = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
  handleClick() {
    this.buttonClicked.emit();
  }
}
