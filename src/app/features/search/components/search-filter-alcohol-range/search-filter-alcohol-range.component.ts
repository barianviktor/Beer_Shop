import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

function lesserIsNotGreaterValidator(group: AbstractControl): {
  [s: string]: boolean;
} {
  let abv_gt = group.get('greaterAbvControl')?.value;
  let abv_lt = group.get('lesserAbvControl')?.value;

  if (abv_gt && abv_lt) {
    if (parseInt(abv_lt) < parseInt(abv_gt)) {
      console.log(abv_gt, abv_lt);

      group.get('greaterAbvControl')?.setErrors({ invalid: true });
      group.get('lesserAbvControl')?.setErrors({ invalid: true });
      return { invalid_intputs: true };
    } else {
      group.get('greaterAbvControl')?.setErrors(null);
      group.get('lesserAbvControl')?.setErrors(null);
      return {};
    }
  }

  return {};
}

@Component({
  selector: 'app-search-filter-alcohol-range',
  templateUrl: './search-filter-alcohol-range.component.html',
  styleUrls: ['./search-filter-alcohol-range.component.scss'],
})
export class SearchFilterAlcoholRangeComponent implements OnInit {
  alcoholControlGroup: FormGroup = new FormGroup(
    {
      greaterAbvControl: new FormControl<number | undefined>(undefined, {
        validators: [Validators.min(0)],
      }),
      lesserAbvControl: new FormControl<number | undefined>(undefined, {
        validators: [Validators.min(0)],
      }),
    },
    {
      validators: [lesserIsNotGreaterValidator],
    }
  );

  @Input() lesserPlaceHolder: string = 'from (%)';
  @Input() greaterPlaceHolder: string = 'until (%)';
  @Input() title: string = 'Alcohol range';
  @Input() width: string = '100%';
  @Input() abv_gt?: number;
  @Input() abv_lt?: number;
  @Output() setAlcoholRange = new EventEmitter<{
    abv_gt: number | undefined;
    abv_lt: number | undefined;
  }>();
  isOpen = true;

  constructor() {}
  get greaterAbvControl(): FormControl {
    return this.alcoholControlGroup.get('greaterAbvControl') as FormControl;
  }
  get lesserAbvControl(): FormControl {
    return this.alcoholControlGroup.get('lesserAbvControl') as FormControl;
  }
  ngOnInit(): void {
    if (this.abv_gt) {
      this.greaterAbvControl.setValue(this.abv_gt);
    }
    if (this.abv_lt) {
      this.lesserAbvControl.setValue(this.abv_lt);
    }
  }
  handleOpenClose(): void {
    this.isOpen = !this.isOpen;
  }
  handleGreaterInput(input: string): void {
    if (parseInt(input) < 0) {
      this.greaterAbvControl.setValue(undefined);
    }
  }
  handleLesserInput(input: string): void {
    if (parseInt(input) < 0) {
      this.lesserAbvControl.setValue(undefined);
    }
  }
  onSubmit() {
    if (this.alcoholControlGroup.valid) {
      this.setAlcoholRange.emit({
        abv_gt: parseInt(this.greaterAbvControl.value),
        abv_lt: parseInt(this.lesserAbvControl.value),
      });
    }
  }
}
