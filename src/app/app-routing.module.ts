import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'beer',
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
    path: 'whislist',
    loadChildren: () =>
      import('./features/whislist/whislist.module').then(
        (m) => m.WhislistModule
      ),
  },
  {
    path: '**',
    redirectTo: '/beer',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
