import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailRoutingModule } from './detail-routing.module';
import { BeerDetailComponent } from './pages/beer-detail/beer-detail.component';
import { BeerDetailSkeltonComponent } from './components/beer-detail-skelton/beer-detail-skelton.component';

@NgModule({
  declarations: [BeerDetailComponent, BeerDetailSkeltonComponent],
  imports: [SharedModule, DetailRoutingModule],
})
export class DetailModule {}
