import { FormControl, FormGroup } from '@angular/forms';
import { ISearchMaltFilterForm } from './searchMaltFilterForm.interface';
export class SearchMaltFilterForm extends FormGroup<ISearchMaltFilterForm> {
  constructor() {
    super({
      amber: new FormControl(false, { nonNullable: true }),
      caramalt: new FormControl(false, { nonNullable: true }),
      dark_crystal: new FormControl(false, { nonNullable: true }),
      dextrin_malt: new FormControl(false, { nonNullable: true }),
      extra_pale: new FormControl(false, { nonNullable: true }),
      flaked_oats: new FormControl(false, { nonNullable: true }),
      munich: new FormControl(false, { nonNullable: true }),
      pilsner: new FormControl(false, { nonNullable: true }),
    });
  }
}
