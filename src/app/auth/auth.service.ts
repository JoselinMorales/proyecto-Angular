import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public username: String = '';
  public user: any = {};

  public login(username: String, password: String){
    this.username = username;
    const user = {
      username, password

    };
    
    return this.http.post('https://u-task-api.herokuapp.com/login', user);
 
  }

  constructor(private http: HttpClient) { }
}