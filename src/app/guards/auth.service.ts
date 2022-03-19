import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Constants } from '../helper/constants';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})

/**
 * A guard service is a service that returns a true or false value to access a specific resource 
 * its a way verifying if a particular resource can be access ...
 */
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {
      //the router is injected inside the constructor ...
   }
   
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    const user = JSON.parse(localStorage.getItem(Constants.USER_KEY)) as User;
    if(user && user.email){
        //if the user email is present, then true..
      return true;
    }
    else{
      this.router.navigate(["login"]); //redirects to Login Component..
      return false;
    }
  }




}
