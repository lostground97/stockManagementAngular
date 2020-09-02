import { Component } from '@angular/core';
import {StudentService} from './student.service'
import * as myGlobals from './global';
import { logging } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormSubmit';
  adminL = myGlobals.getAdminStatus();
  userL = myGlobals.getUserStatus();
  AdminLogin(){
    myGlobals.adminLogin();
    console.log("Admin" + myGlobals.getAdminStatus());
    this.adminL = myGlobals.getAdminStatus();
  }

  UserLogin(){
    myGlobals.userLogin();
    console.log("User" + myGlobals.getUserStatus());
    this.adminL = myGlobals.getUserStatus();
  }

  logout(){
    myGlobals.logout();
    this.adminL = myGlobals.getAdminStatus();
    this.userL = myGlobals.getUserStatus();
    console.log("User" + myGlobals.getUserStatus());
    console.log("Admin" + myGlobals.getAdminStatus());
  }

}


