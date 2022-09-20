import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'my-products',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./pages/my-products/my-products.module').then(
                (m) => m.MyProductsPageModule
              ),
          },
        ],
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./pages/products/products.module').then(
                (m) => m.ProductsPageModule
              ),
          },
        ],
      },
      {
        path: 'requests',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./pages/requests/requests.module').then(
                (m) => m.RequestsPageModule
              ),
          },
        ],
      },
      {
        path: 'transactions',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./pages/transactions/transactions.module').then(
                (m) => m.TransactionsPageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/home/my-products',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home/my-products',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
