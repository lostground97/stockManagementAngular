import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CompareCompanyComponent } from './compare-company/compare-company.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-login', pathMatch: 'full' },
  { path: 'add-user', component: AddUserComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'success', component:DashboardComponent},
  { path: 'success/compare-company', component:CompareCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
