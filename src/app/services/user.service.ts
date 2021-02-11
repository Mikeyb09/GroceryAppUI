import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private mainURL = "//localhost:8081/";

  private urlLoginUser = this.mainURL + "users/login-user/";

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'responseType': 'text' as 'json'
  });

  constructor(private httpClient:HttpClient) { }

  userLogin(username:string, password:string) :Observable<User>{

    let map = {
      "username":username,
      "password":password
    }

    return this.httpClient.post<User>(this.urlLoginUser, JSON.stringify(map), {headers: this.headers});
  }

}
