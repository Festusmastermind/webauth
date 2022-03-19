import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../Models/user';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  public userList: User[] =[];
  counter : number = 0;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //run this when this component is invoked 
    this.getAllUser();
  }

  getAllUser(){
    console.log("The Datalist is Available below");
    this.userService.getAllUser().subscribe((data:User[]) =>{
      //this.userList=data as String[];
      this.userList = data;
      console.log(this.userList); //the data is not getting to the place. ..
    });
  }





}
