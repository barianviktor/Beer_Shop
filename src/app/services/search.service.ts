import { SearchBeerForm } from 'src/app/interfaces/SearchBeerForm';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ISearchBeerFormInterface } from '../interfaces/searchBeerForm.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchBeerForm: FormGroup<ISearchBeerFormInterface> = new SearchBeerForm();
  constructor() {}
}
