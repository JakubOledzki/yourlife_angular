import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authentication(username, password){
    if(username === 'usertest' && password === 'password'){
      sessionStorage.setItem('username', username);
      return true;
    } else{return false; }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('username');
    if(user === null){
      return false;
    }
    else{
      return true;
    }
  }

  logout(){
    sessionStorage.removeItem('username');
  }

}
