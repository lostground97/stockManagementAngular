import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { User } from '../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService:UserService, private router: Router) { }

  user : User=new User();
  submitted = false;
  errorFlag = false;
  respone_message;

  ngOnInit() {
    this.submitted=false;
    this.errorFlag = false;
  }

  studentsaveform=new FormGroup({
    username:new FormControl('' , [Validators.required  ] ),
    firstName:new FormControl('' , [Validators.required ] ),
    lastName:new FormControl('' , [Validators.required  ] ),
    password:new FormControl('' , [Validators.required ] ),
    email:new FormControl('',[Validators.required,Validators.email]),
    mobile:new FormControl('' , [Validators.required  ] ),
  });

  saveUser(saveUser){
    this.user=new User();   
    this.user.username=this.UserName.value;
    this.user.firstName=this.UserFirstName.value;
    this.user.lastName=this.UserLastName.value;
    this.user.password=this.UserPassword.value;
    this.user.email=this.UserEmail.value;
    this.user.mobile=this.UserMobile.value;
    this.save();
  }

  

  save() {
    this.userService.createStudent(this.user)
      .subscribe(data => {
        console.log(data)
        this.submitted = true;
        this.router.navigate(['/']);
      }, error => {
      console.log(error)
        this.errorFlag = true;
        this.respone_message = error;
        console.log(this.respone_message.error);
        document.getElementById("add-user-error").innerHTML = " " +this.respone_message.error;
    }
      
      );
    this.user = new User();
  }

  get UserName(){
    return this.studentsaveform.get('username');
  }

  get UserPassword(){
    return this.studentsaveform.get('password');
  }

  get UserFirstName(){
    return this.studentsaveform.get('firstName');
  }

  get UserLastName(){
    return this.studentsaveform.get('lastName');
  }

  get UserEmail(){
    return this.studentsaveform.get('email');
  }

  get UserMobile(){
    return this.studentsaveform.get('mobile');
  }

  addStudentForm(){
    this.submitted=false;
    this.studentsaveform.reset();
  }
}
