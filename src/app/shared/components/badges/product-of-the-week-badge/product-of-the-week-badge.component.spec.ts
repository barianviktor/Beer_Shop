import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOfTheWeekBadgeComponent } from './product-of-the-week-badge.component';

describe('ProductOfTheWeekBadgeComponent', () => {
  let component: ProductOfTheWeekBadgeComponent;
  let fixture: ComponentFixture<ProductOfTheWeekBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOfTheWeekBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOfTheWeekBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
