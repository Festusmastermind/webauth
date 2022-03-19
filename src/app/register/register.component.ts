import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm = this.formBuilder.group({
    fullName:['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  //inject the UserService Class using Dependency Injection..
  constructor(private formBuilder: FormBuilder, private userService: UserService) {  }

  ngOnInit(): void {
  }
 
  onSubmit(){
    console.log("Register Button is working"); //testing if the register btn is working ..
    //onSubmission of the form we want to send the data to the our registeruser api endpoint for insertion inside the dB
    let fullName = this.registerForm.controls["fullName"].value;
    let email = this.registerForm.controls["email"].value;
    let password = this.registerForm.controls["password"].value;

    this.userService.register(fullName, email, password).subscribe((data)=>{
      console.log("response", data);
    }, error=>{
      console.log("error", error);
    });
   
  }

}
