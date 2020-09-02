import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Student } from '../student';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentservice:StudentService) { }

  student : Student=new Student();
  submitted = false;
  errorFlag = false;

  ngOnInit() {
    this.submitted=false;
    this.errorFlag = false;
  }

  studentsaveform=new FormGroup({
    username:new FormControl('' , [Validators.required  ] ),
    firstname:new FormControl('' , [Validators.required ] ),
    lastname:new FormControl('' , [Validators.required  ] ),
    password:new FormControl('' , [Validators.required ] ),
    email:new FormControl('',[Validators.required,Validators.email]),
    mobile:new FormControl('' , [Validators.required  ] ),
  });

  saveStudent(saveStudent){
    this.student=new Student();   
    this.student.username=this.UserName.value;
    this.student.first_name=this.UserFirstName.value;
    this.student.last_name=this.UserLastName.value;
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
      }, error => {
      console.log(error)
        this.errorFlag = true;
    }
      
      );
    this.student = new Student();
  }

  get UserName(){
    return this.studentsaveform.get('username');
  }

  get UserPassword(){
    return this.studentsaveform.get('password');
  }

  get UserFirstName(){
    return this.studentsaveform.get('firstname');
  }

  get UserLastName(){
    return this.studentsaveform.get('lastname');
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
