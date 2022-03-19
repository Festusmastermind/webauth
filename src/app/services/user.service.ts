import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ResponseModel } from '../Models/responseModel';
import { User } from '../Models/user';
import { ResponseCode } from '../enums/responseCode';
import { Constants } from '../helper/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //this to get our api base endpoint..
  private readonly baseURL: string ="https://localhost:44391/api/user/";
  public userList: User[] = [];

  constructor(private httpClient: HttpClient) { }

 //this method is to send the data to the api and return a response for authentication
  public login(email:string, password:string)
  {
	  const body={
		  Email:email, 
		  Password: password
	  }
	  return this.httpClient.post<ResponseModel>(this.baseURL+"Login", body); //this send the data and returns a response..
  }
  //this method is to send the data to the api registeruser endpoint...to insert inside database..
  public register(fullname: string, email:string, password:string){
	  const body={
		  FullName: fullname, 
		  Email: email,
		  Password: password
	  }
	  return this.httpClient.post<ResponseModel>(this.baseURL+"RegisterUser", body); //this send the data and returns a response..
  }

  public getAllUser(){
	  let userInfo = JSON.parse(localStorage.getItem(Constants.USER_KEY));
	  //console.log(userInfo.token); //get the user stored token in the browser local storage..
	  //send the user valid token with the request to getalluser
	  const headers = new HttpHeaders({
		  'Authorization':`Bearer ${userInfo?.token}`
	  });
	  
	// return this.httpClient.get(this.baseURL+"GetAllUser", {headers: headers});
	  return this.httpClient.get<ResponseModel>(this.baseURL+"GetAllUser", {headers: headers}).pipe(map(res=>{
		  let userList = new Array<User>();
		  if(res.responseCode == ResponseCode.Ok)
		  {
			  if(res.dataSet)
			  {
				  res.dataSet.map((x:User)=>{
					  userList.push(new User(x.fullName, x.email, x.userName)); //because we want to rendered a specific data..
				  });
				//console.log("Am here"); //this is for tracking Where Code as reach..
			  }  
		  }
		  return userList;  
	  }));

  }










}
