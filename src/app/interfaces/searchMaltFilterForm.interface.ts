import { FormControl } from '@angular/forms';
export interface ISearchMaltFilterForm {
  pilsner: FormControl<boolean>;
  dextrin_malt: FormControl<boolean>;
  extra_pale: FormControl<boolean>;
  flaked_oats: FormControl<boolean>;
  munich: FormControl<boolean>;
  caramalt: FormControl<boolean>;
  dark_crystal: FormControl<boolean>;
  amber: FormControl<boolean>;
}
