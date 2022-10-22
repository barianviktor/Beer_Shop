import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-checkbox-input',
  templateUrl: './custom-checkbox-input.component.html',
  styleUrls: ['./custom-checkbox-input.component.scss'],
})
export class CustomCheckboxInputComponent implements OnInit {
  @Input() data: string = 'IPA';
  @Input() icon_path: string = 'assets/icons/check.svg';
  @Input() id: string = 'checkbox_id';
  @Input() value: boolean = false;
  @Output() clicked = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  onHandleClick(): void {
    this.clicked.emit(this.data);
  }
}
