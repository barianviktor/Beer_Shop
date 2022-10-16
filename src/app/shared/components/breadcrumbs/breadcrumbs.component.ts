import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  @Input() text: string = 'Home';
  @Input() icon_path: string = 'assets/icons/nav-arrow-right-side.svg';
  @Output() linkClicked = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  onLinkClicked() {
    this.linkClicked.emit();
  }
}
