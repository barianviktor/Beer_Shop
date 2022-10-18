import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterAlcoholRangeComponent } from './search-filter-alcohol-range.component';

describe('SearchFilterAlcoholRangeComponent', () => {
  let component: SearchFilterAlcoholRangeComponent;
  let fixture: ComponentFixture<SearchFilterAlcoholRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFilterAlcoholRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFilterAlcoholRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
