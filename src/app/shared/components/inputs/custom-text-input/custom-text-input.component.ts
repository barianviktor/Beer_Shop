import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-text-input',
  templateUrl: './custom-text-input.component.html',
  styleUrls: ['./custom-text-input.component.scss'],
})
export class CustomTextInputComponent implements OnInit {
  @Input() control: FormControl = new FormControl('');
  @Input() disabled: boolean = false;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() width: string = '100%';
  @Input() type: string = 'text';
  @Output() onInputHandler = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onInput(e: Event) {
    this.onInputHandler.emit((e.target as HTMLInputElement).value);
  }
}
