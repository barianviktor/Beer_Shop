import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Input() selectedValue?: string;
  @Output() checkboxClicked = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  handleOpenClose(): void {
    this.isOpen = !this.isOpen;
  }
  onCheckboxClicked(item: string): void {
    this.checkboxClicked.emit(item);
  }
}
