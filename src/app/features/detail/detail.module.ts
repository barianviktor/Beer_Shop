import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailRoutingModule } from './detail-routing.module';
import { BeerDetailComponent } from './pages/beer-detail/beer-detail.component';

@NgModule({
  declarations: [BeerDetailComponent],
  imports: [SharedModule, DetailRoutingModule],
})
export class DetailModule {}
