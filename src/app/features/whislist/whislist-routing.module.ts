import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhislistComponent } from './pages/whislist/whislist.component';

const routes: Routes = [
  {
    path: '',
    component: WhislistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhislistRoutingModule {}
