import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-filter-container',
  templateUrl: './search-filter-container.component.html',
  styleUrls: ['./search-filter-container.component.scss'],
})
export class SearchFilterContainerComponent implements OnInit {
  isOpen = true;
  @Input() title: string = '';
  @Input() width: string = '100%';
  @Input() datas: string[] = [];
  @Input() selectedValues: string[] = [];
  @Output() checkboxClicked = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    console.log(this.selectedValues);
    console.log(this.title);
    console.log(this.datas);
  }
  handleOpenClose(): void {
    this.isOpen = !this.isOpen;
  }
  onCheckboxClicked(item: string): void {
    this.checkboxClicked.emit(item);
  }
}
