import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCheckboxInputComponent } from './custom-checkbox-input.component';

describe('CustomCheckboxInputComponent', () => {
  let component: CustomCheckboxInputComponent;
  let fixture: ComponentFixture<CustomCheckboxInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCheckboxInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCheckboxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
