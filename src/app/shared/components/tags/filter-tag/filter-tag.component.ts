import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-tag',
  templateUrl: './filter-tag.component.html',
  styleUrls: ['./filter-tag.component.scss'],
})
export class FilterTagComponent implements OnInit {
  @Input() text: string = 'Filter tag';
  @Input() width: string = 'auto';
  @Input() borderRadius: string = '0px';
  @Input() icon_path: string = 'assets/icons/cross.svg';

  @Output() iconClicked = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.iconClicked.emit();
  }
}
