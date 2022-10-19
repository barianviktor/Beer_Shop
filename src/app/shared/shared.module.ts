import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuItemTextComponent } from './components/menu-items/menu-item-text/menu-item-text.component';
import { MenuItemIconComponent } from './components/menu-items/menu-item-icon/menu-item-icon.component';
import { IconOnlyButtonComponent } from './components/buttons/icon-only-button/icon-only-button.component';
import { PrimaryButtonComponent } from './components/buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './components/buttons/secondary-button/secondary-button.component';
import { TextButtonComponent } from './components/buttons/text-button/text-button.component';
import { SaleBadgeComponent } from './components/badges/sale-badge/sale-badge.component';
import { SoldOutBadgeComponent } from './components/badges/sold-out-badge/sold-out-badge.component';
import { NewBadgeComponent } from './components/badges/new-badge/new-badge.component';
import { ProductOfTheWeekBadgeComponent } from './components/badges/product-of-the-week-badge/product-of-the-week-badge.component';
import { FilterTagComponent } from './components/tags/filter-tag/filter-tag.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CustomTextInputComponent } from './components/inputs/custom-text-input/custom-text-input.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomCheckboxInputComponent } from './components/inputs/custom-checkbox-input/custom-checkbox-input.component';
import { CustomSearchbarInputComponent } from './components/inputs/custom-searchbar-input/custom-searchbar-input.component';
import { SearchItemCardComponent } from './components/cards/search-item-card/search-item-card.component';
import { PercentOffBadgeComponent } from './components/badges/percent-off-badge/percent-off-badge.component';
import { OnlyIconComponent } from './components/only-icon/only-icon.component';
import { CustomSpinnerInputComponent } from './components/inputs/custom-spinner-input/custom-spinner-input.component';
import { CheckoutCardComponent } from './components/cards/checkout-card/checkout-card.component';
import { AddToCartCardComponent } from './components/cards/add-to-cart-card/add-to-cart-card.component';

@NgModule({
  declarations: [
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    IconOnlyButtonComponent,
    TextButtonComponent,
    MenuItemTextComponent,
    MenuItemIconComponent,
    SaleBadgeComponent,
    SoldOutBadgeComponent,
    NewBadgeComponent,
    ProductOfTheWeekBadgeComponent,
    FilterTagComponent,
    BreadcrumbsComponent,
    CustomTextInputComponent,
    CustomCheckboxInputComponent,
    CustomSearchbarInputComponent,
    SearchItemCardComponent,
    PercentOffBadgeComponent,
    OnlyIconComponent,
    CustomSpinnerInputComponent,
    CheckoutCardComponent,
    AddToCartCardComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    IconOnlyButtonComponent,
    TextButtonComponent,
    MenuItemTextComponent,
    MenuItemIconComponent,
    SaleBadgeComponent,
    SoldOutBadgeComponent,
    NewBadgeComponent,
    ProductOfTheWeekBadgeComponent,
    FilterTagComponent,
    BreadcrumbsComponent,
    CustomTextInputComponent,
    CustomCheckboxInputComponent,
    CustomSearchbarInputComponent,
    SearchItemCardComponent,
    PercentOffBadgeComponent,
    CustomSpinnerInputComponent,
    CheckoutCardComponent,
    AddToCartCardComponent,
  ],
})
export class SharedModule {}
