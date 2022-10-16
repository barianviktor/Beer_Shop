import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemIconComponent } from './menu-item-icon.component';

describe('MenuItemIconComponent', () => {
  let component: MenuItemIconComponent;
  let fixture: ComponentFixture<MenuItemIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
