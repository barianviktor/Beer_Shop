import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDetailSkeltonComponent } from './beer-detail-skelton.component';

describe('BeerDetailSkeltonComponent', () => {
  let component: BeerDetailSkeltonComponent;
  let fixture: ComponentFixture<BeerDetailSkeltonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerDetailSkeltonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerDetailSkeltonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
