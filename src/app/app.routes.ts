import { Routes } from '@angular/router';
import { ProductComponent } from './product-component/product-component'; // Example component

export const routes: Routes = [
    { path: '', redirectTo: '/Product', pathMatch: 'full' }, 
  { path: 'Product', component: ProductComponent },
  { path: 'about', component: ProductComponent },
  { path: 'contact', component: ProductComponent },
];
