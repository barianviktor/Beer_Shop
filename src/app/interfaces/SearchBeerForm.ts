import { SearchMaltFilterForm } from './SearchMaltFilterForm';
import { SearchHopsFilterForm } from './SearchHopsFilterForm';
import { ISearchBeerFormInterface } from './searchBeerForm.interface';
import { FormGroup, FormControl } from '@angular/forms';
export class SearchBeerForm extends FormGroup<ISearchBeerFormInterface> {
  constructor() {
    super({
      name: new FormControl('', { nonNullable: true }),
      hops: new SearchHopsFilterForm(),
      malts: new SearchMaltFilterForm(),
      abv_gt: new FormControl('', { nonNullable: true }),
      abv_lt: new FormControl('', { nonNullable: true }),
    });
  }
}
