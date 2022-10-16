import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldOutBadgeComponent } from './sold-out-badge.component';

describe('SoldOutBadgeComponent', () => {
  let component: SoldOutBadgeComponent;
  let fixture: ComponentFixture<SoldOutBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoldOutBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoldOutBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
