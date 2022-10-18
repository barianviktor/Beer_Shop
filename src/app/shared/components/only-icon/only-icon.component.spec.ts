import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyIconComponent } from './only-icon.component';

describe('OnlyIconComponent', () => {
  let component: OnlyIconComponent;
  let fixture: ComponentFixture<OnlyIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
