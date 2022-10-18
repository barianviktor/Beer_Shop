import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./features/search/search.module').then((m) => m.SearchModule),
  },

  {
    path: 'shopping-cart',
    /* component: DummyComponent, */
    loadChildren: () =>
      import('./features/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'beer',
    /* component: DummyComponent, */
    loadChildren: () =>
      import('./features/detail/detail.module').then((m) => m.DetailModule),
  },
  {
    path: 'dummy',
    /* component: DummyComponent, */
    loadChildren: () =>
      import('./features/dummy/dummy.module').then((m) => m.DummyModule),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
