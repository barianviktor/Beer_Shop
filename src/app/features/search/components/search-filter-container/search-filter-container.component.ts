import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-filter-container',
  templateUrl: './search-filter-container.component.html',
  styleUrls: ['./search-filter-container.component.scss'],
})
export class SearchFilterContainerComponent implements OnInit {
  isOpen = true;
  @Input() title: string = '';
  @Input() formGroup!: FormGroup;
  @Input() width: string = '100%';
  constructor() {}
  castAbstractControlToBoolean(
    control: AbstractControl<any, any>
  ): FormControl<boolean> {
    return control as FormControl<boolean>;
  }
  ngOnInit(): void {
    console.log(this.formGroup.controls);
  }
  handleOpenClose(): void {
    this.isOpen = !this.isOpen;
  }
}
