import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSpinnerInputComponent } from './custom-spinner-input.component';

describe('CustomSpinnerInputComponent', () => {
  let component: CustomSpinnerInputComponent;
  let fixture: ComponentFixture<CustomSpinnerInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSpinnerInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSpinnerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
