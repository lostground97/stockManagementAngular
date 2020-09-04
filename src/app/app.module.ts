import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AddUserComponent } from './Components/add-user/add-user.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserLoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
