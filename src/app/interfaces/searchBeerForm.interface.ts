import { FormControl, FormGroup } from '@angular/forms';
import { ISearchHopsFilterForm } from './searchHopsFilterForm.interface';
import { ISearchMaltFilterForm } from './searchMaltFilterForm.interface';
export interface ISearchBeerFormInterface {
  name: FormControl<string>;
  abv_gt: FormControl<string>;
  abv_lt: FormControl<string>;
  hops: FormGroup<ISearchHopsFilterForm>;
  malts: FormGroup<ISearchMaltFilterForm>;
}
