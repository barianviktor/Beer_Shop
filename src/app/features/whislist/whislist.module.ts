import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhislistRoutingModule } from './whislist-routing.module';
import { WhislistComponent } from './pages/whislist/whislist.component';

@NgModule({
  declarations: [WhislistComponent],
  imports: [SharedModule, WhislistRoutingModule],
})
export class WhislistModule {}
