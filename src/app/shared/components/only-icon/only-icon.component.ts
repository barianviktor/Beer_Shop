import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-only-icon',
  templateUrl: './only-icon.component.html',
  styleUrls: ['./only-icon.component.scss'],
})
export class OnlyIconComponent implements OnInit {
  @Input() icon_name = 'heart';
  @Input() width: string = '15px';
  @Input() height: string = '15px';
  @Input() color: string = 'black';
  @Input() icon_class = 'heath_icon';
  @Output() iconClicked = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.iconClicked.emit();
  }
}
