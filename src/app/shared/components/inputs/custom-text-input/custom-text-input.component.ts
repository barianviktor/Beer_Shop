import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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
  constructor() {}

  ngOnInit(): void {}
}
