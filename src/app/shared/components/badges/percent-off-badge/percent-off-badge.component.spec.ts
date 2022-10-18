import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentOffBadgeComponent } from './percent-off-badge.component';

describe('PercentOffBadgeComponent', () => {
  let component: PercentOffBadgeComponent;
  let fixture: ComponentFixture<PercentOffBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentOffBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentOffBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
