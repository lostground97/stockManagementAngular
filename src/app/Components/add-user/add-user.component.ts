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

  constructor(private studentservice:UserService, private router: Router) { }

  student : User=new User();
  submitted = false;
  errorFlag = false;

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
    this.student=new User();   
    this.student.username=this.UserName.value;
    this.student.firstName=this.UserFirstName.value;
    this.student.lastName=this.UserLastName.value;
    this.student.password=this.UserPassword.value;
    this.student.email=this.UserEmail.value;
    this.student.mobile=this.UserMobile.value;
    this.save();
  }

  

  save() {
    this.studentservice.createStudent(this.student)
      .subscribe(data => {
        console.log(data)
        this.submitted = true;
        this.router.navigate(['/']);
      }, error => {
      console.log(error)
        this.errorFlag = true;
    }
      
      );
    this.student = new User();
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
