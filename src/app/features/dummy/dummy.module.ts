import { NgModule } from '@angular/core';
import { DummyComponent } from './dummy.component';
import { DummyRouterModule } from './dummy-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
/* only did component testing in this module */

@NgModule({
  declarations: [DummyComponent],
  imports: [DummyRouterModule, SharedModule],
})
export class DummyModule {}
