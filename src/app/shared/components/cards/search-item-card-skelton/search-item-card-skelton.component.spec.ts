import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemCardSkeltonComponent } from './search-item-card-skelton.component';

describe('SearchItemCardSkeltonComponent', () => {
  let component: SearchItemCardSkeltonComponent;
  let fixture: ComponentFixture<SearchItemCardSkeltonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchItemCardSkeltonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchItemCardSkeltonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
