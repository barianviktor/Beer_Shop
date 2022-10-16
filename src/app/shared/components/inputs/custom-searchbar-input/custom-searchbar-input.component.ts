import { FormControl } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-searchbar-input',
  templateUrl: './custom-searchbar-input.component.html',
  styleUrls: ['./custom-searchbar-input.component.scss'],
})
export class CustomSearchbarInputComponent implements OnInit {
  @Input() control: FormControl<string> = new FormControl<string>('', {
    nonNullable: true,
  });
  @Input() placeholder: string = 'Search for a beer...';
  @Input() icon_path: string = 'assets/icons/search.svg';
  @Input() width: string = '100%';
  @Output() searchEmitter = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  onSearch() {
    this.searchEmitter.emit();
  }
}
