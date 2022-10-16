import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss'],
})
export class TextButtonComponent implements OnInit {
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
