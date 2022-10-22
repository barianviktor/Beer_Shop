import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPagingComponent } from './custom-paging.component';

describe('CustomPagingComponent', () => {
  let component: CustomPagingComponent;
  let fixture: ComponentFixture<CustomPagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
