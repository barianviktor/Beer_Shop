import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemTextComponent } from './menu-item-text.component';

describe('MenuItemTextComponent', () => {
  let component: MenuItemTextComponent;
  let fixture: ComponentFixture<MenuItemTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
