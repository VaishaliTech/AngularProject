import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./component/customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./component/customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'customerProfile',
    loadChildren: () =>
      import('./component/customer-profile/customer-profile.module').then(m => m.CustomerProfileModule)
  },
  {
    path: '',
    redirectTo: 'customer',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
