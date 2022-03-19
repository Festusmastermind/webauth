import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from './helper/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webAuth';

  //inject the router service into our constructor for usage in this class....
  constructor(private router: Router){}
  
  onLogout(){
    localStorage.removeItem(Constants.USER_KEY);
   // this.router.navigate(["/login"]);  //redirect to login page..
  }

//we use the get keyword to convert the method into class property.. ...
 get isUserLogin(){
   const user = localStorage.getItem(Constants.USER_KEY);
   return user && user.length > 0; //indicates if there's a dataset present in the localstorage..
  }



  
}
