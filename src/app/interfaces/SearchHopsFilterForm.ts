import { FormGroup, FormControl } from '@angular/forms';
import { ISearchHopsFilterForm } from './searchHopsFilterForm.interface';
export class SearchHopsFilterForm extends FormGroup<ISearchHopsFilterForm> {
  constructor() {
    super({
      amarillo: new FormControl(false, { nonNullable: true }),
      centennial: new FormControl(false, { nonNullable: true }),
      chinook: new FormControl(false, { nonNullable: true }),
      citra: new FormControl(false, { nonNullable: true }),
      columbus: new FormControl(false, { nonNullable: true }),
      comet: new FormControl(false, { nonNullable: true }),
      mosaic: new FormControl(false, { nonNullable: true }),
      simcoe: new FormControl(false, { nonNullable: true }),
      sorachi_ace: new FormControl(false, { nonNullable: true }),
    });
  }
}
