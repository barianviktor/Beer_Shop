import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-searchbar-input',
  templateUrl: './custom-searchbar-input.component.html',
  styleUrls: ['./custom-searchbar-input.component.scss'],
})
export class CustomSearchbarInputComponent implements OnInit {
  searchInputGroup: FormGroup = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });
  get name(): FormControl {
    return this.searchInputGroup.get('name') as FormControl;
  }
  @Input() searchParamName: string = '';
  @Input() placeholder: string = 'Search for a beer...';
  @Input() icon_path: string = 'assets/icons/search.svg';
  @Input() width: string = '100%';
  @Output() searchEmitter = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    this.name.setValue(this.searchParamName);
  }
  onSearch() {
    if (this.searchInputGroup.valid) {
      this.searchEmitter.emit(this.name.value);
    }
  }
}
