import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { CustomerProfileComponent } from './customer-profile.component';

const routes: Routes = [
  {
    path: 'customerProfile',
    component: CustomerProfileComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CustomerProfileModule { }
