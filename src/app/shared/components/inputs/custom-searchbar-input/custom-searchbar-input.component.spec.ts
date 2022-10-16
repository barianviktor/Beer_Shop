import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSearchbarInputComponent } from './custom-searchbar-input.component';

describe('CustomSearchbarInputComponent', () => {
  let component: CustomSearchbarInputComponent;
  let fixture: ComponentFixture<CustomSearchbarInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSearchbarInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSearchbarInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
