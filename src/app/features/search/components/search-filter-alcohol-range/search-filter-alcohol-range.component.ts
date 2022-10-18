import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-filter-alcohol-range',
  templateUrl: './search-filter-alcohol-range.component.html',
  styleUrls: ['./search-filter-alcohol-range.component.scss'],
})
export class SearchFilterAlcoholRangeComponent implements OnInit {
  greaterAbvControl: FormControl<string> = new FormControl('', {
    nonNullable: true,
  });
  lesserAbvControl: FormControl<string> = new FormControl('', {
    nonNullable: true,
  });
  @Input() lesserPlaceHolder: string = 'from (%)';
  @Input() greaterPlaceHolder: string = 'until (%)';
  @Input() title: string = 'Alcohol range';
  @Input() width: string = '100%';
  @Output() setAlcoholRange = new EventEmitter<{
    abv_gt: string;
    abv_lt: string;
  }>();
  isOpen = true;

  constructor() {}

  ngOnInit(): void {}
  handleOpenClose(): void {
    this.isOpen = !this.isOpen;
  }
  onClick() {
    this.setAlcoholRange.emit({
      abv_gt: this.greaterAbvControl.value,
      abv_lt: this.lesserAbvControl.value,
    });
  }
}
