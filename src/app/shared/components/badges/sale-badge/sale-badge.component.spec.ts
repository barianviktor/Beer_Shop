import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleBadgeComponent } from './sale-badge.component';

describe('SaleBadgeComponent', () => {
  let component: SaleBadgeComponent;
  let fixture: ComponentFixture<SaleBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
