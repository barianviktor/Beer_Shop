import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-paging',
  templateUrl: './custom-paging.component.html',
  styleUrls: ['./custom-paging.component.scss'],
})
export class CustomPagingComponent implements OnInit {
  @Output() setNext = new EventEmitter<void>();
  @Output() setPrevious = new EventEmitter<void>();
  @Output() setValue = new EventEmitter<number>();
  @Input() currentValue: number = 0;
  @Input() dots: number[] = [];
  constructor() {}

  ngOnInit(): void {}

  onSetNext(): void {
    this.setNext.emit();
  }
  onSetPrevious(): void {
    this.setPrevious.emit();
  }
  onSetValue(value: number): void {
    this.setValue.emit(value);
  }
}
