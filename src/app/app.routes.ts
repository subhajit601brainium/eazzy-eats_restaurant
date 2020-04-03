import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { VendoritemsComponent } from './vendoritems/vendoritems.component';
import { LoginComponent } from './login/login.component';

import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

import { AuthGuard } from './guards/index';


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'itemAdd', component: VendoritemsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'Changepassword', component: ChangepasswordComponent, canActivate: [AuthGuard] },
  { path: 'forgotpassword/:id', component: ForgotpasswordComponent }
];
