import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SearchFilterContainerComponent } from './components/search-filter-container/search-filter-container.component';
import { SearchFilterAlcoholRangeComponent } from './components/search-filter-alcohol-range/search-filter-alcohol-range.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    HomeComponent,
    SearchFilterContainerComponent,
    SearchFilterAlcoholRangeComponent,
  ],
  imports: [SharedModule, SearchRoutingModule, InfiniteScrollModule],
})
export class SearchModule {}
