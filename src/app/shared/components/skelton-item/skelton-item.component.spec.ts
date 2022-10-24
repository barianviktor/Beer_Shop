import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeltonItemComponent } from './skelton-item.component';

describe('SkeltonItemComponent', () => {
  let component: SkeltonItemComponent;
  let fixture: ComponentFixture<SkeltonItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeltonItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeltonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
