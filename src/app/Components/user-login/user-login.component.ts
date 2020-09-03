import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { loginUser } from 'src/app/loginUser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router , Routes} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private studentservice:StudentService, private router: Router) { }

  loginId : loginUser=new loginUser();
  submitted = false;
  errorFlag = false;

  ngOnInit() {
    this.submitted=false;
    this.errorFlag = false;
  }

  userLoginForm = new FormGroup({
    username:new FormControl('' , [Validators.required  ] ),
    password:new FormControl('' , [Validators.required  ] ),
  });

  goLoginUser(goLoginUser){
    this.loginId = new loginUser();
    this.loginId.username = this.getUserName.value;
    this.loginId.password = this.getUserPassword.value;
    this.save();
  }

  save() {
    this.studentservice.loginUser(this.loginId)
      .subscribe(data => {
        console.log(data)
        this.submitted = true;
        console.log("bearer "+data.jwt);
        this.router.navigate(['/success']);
      }, error => {
      console.log(error)
        this.errorFlag = true;
    }
      
      );
  }

  get getUserName(){
    return this.userLoginForm.get('username');
  }

  get getUserPassword(){
    return this.userLoginForm.get('password');
  }

}
