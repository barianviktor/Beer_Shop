import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DummyComponent } from './features/dummy/dummy.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'dummy',
    /* component: DummyComponent, */
    loadChildren: () =>
      import('./features/dummy/dummy.module').then((m) => m.DummyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
