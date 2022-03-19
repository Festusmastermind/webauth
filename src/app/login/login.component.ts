import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from '../helper/constants';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
  //Router service is used to navigate to different URL ...
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("logging in .."); //this is to check if the submit event is reaching this function ..
    let email = this.loginForm.controls["email"].value;
    let password = this.loginForm.controls["password"].value;
    
    //the data returned when login in consists of token inclusive..
    this.userService.login(email, password).subscribe((data:any)=>{
      if(data.responseCode == 1)
      {
		    localStorage.setItem(Constants.USER_KEY, JSON.stringify(data.dataSet)); //stored the dataset response inside localstorage..
		    this.router.navigate(["/"]); ///this goes to the homepage..
      }
      //console.log("response", data); //this response is the bring both error and success value..
    }, error=>{
      console.log("error", error); //the code is not even reaching ...this is to be investigated..
    });

  }










  
}
