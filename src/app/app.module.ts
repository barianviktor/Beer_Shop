import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    /*     DummyModule,
    SearchModule,
    DetailModule,
    CartModule, */
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
