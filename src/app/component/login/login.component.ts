import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string='';
  password: string='';
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  login(){
    console.log("the email is :",this.email)
    if(this.email==''){
      alert("Please Enter a valid Email");
      return;
  }
  if(this.password==''){
    alert("Please Enter a valid Password");
    return;
  }

  this.auth.login(this.email,this.password);
  this.email='';
  this.password='';

  }


}
