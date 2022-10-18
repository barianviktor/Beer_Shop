import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [SharedModule, CartRoutingModule],
})
export class CartModule {}
