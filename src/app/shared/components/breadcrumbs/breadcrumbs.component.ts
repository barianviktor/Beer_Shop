import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  @Input() text: string = 'Home';
  @Input() icon_path: string = 'assets/icons/nav-arrow-right-side.svg';
  @Input() linkTo: string[] = [''];
  constructor() {}

  ngOnInit(): void {}
}
