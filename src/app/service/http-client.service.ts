import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class User{
  constructor(
    public email: string,
    public password: string,
    public firstname: string,
    public lastname: string
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }


  getUsers(){
    console.log('test call');
    return this.httpClient.get<User[]>('http://localhost:8080/users');
  }

  createUser(user: User){
    return this.httpClient.post<User>("http://localhost:8080/user", user);
  }

}
