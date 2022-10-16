import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-checkbox-input',
  templateUrl: './custom-checkbox-input.component.html',
  styleUrls: ['./custom-checkbox-input.component.scss'],
})
export class CustomCheckboxInputComponent implements OnInit {
  @Input() text: string = 'IPA';
  @Input() icon_path: string = 'assets/icons/check.svg';
  @Input() id: string = 'checkbox_id';
  @Input() control: FormControl<boolean> = new FormControl<boolean>(false, {
    nonNullable: true,
  });
  constructor() {}

  ngOnInit(): void {
    console.log(this.control);
  }
}
