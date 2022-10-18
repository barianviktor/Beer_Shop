import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [ShoppingCartComponent, CartItemComponent],
  imports: [SharedModule, CartRoutingModule],
})
export class CartModule {}
