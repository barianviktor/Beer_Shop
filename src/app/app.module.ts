import { CartModule } from './features/cart/cart.module';
import { DetailModule } from './features/detail/detail.module';
import { SearchModule } from './features/search/search.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DummyModule } from './features/dummy/dummy.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    DummyModule,
    SharedModule,
    SearchModule,
    DetailModule,
    CartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
