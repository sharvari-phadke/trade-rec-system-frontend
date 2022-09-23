import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserVerification(user: User): Observable<any> {
    console.log("sending request ");
    // console.log("user "+user);
    // console.log("user pwd "+user.password);
    // console.log("user uname "+user.username);
    return this.http.post("http://localhost:9000/api/user/userVerification", user);
  }
}
