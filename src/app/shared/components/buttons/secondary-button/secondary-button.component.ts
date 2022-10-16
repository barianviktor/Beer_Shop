import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.scss'],
})
export class SecondaryButtonComponent implements OnInit {
  @Input() text: string = 'Reset to default';
  @Output() buttonClicked = new EventEmitter<void>();
  @Input() disabled: boolean = false;
  @Input() width: string = 'auto';
  @Input() borderRadius: string = '4px';

  constructor() {}

  ngOnInit(): void {}
  handleClick() {
    this.buttonClicked.emit();
  }
}
