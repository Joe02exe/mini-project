import { Injectable } from '@angular/core';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class MockAuthentificationService {

  user?: User;

  constructor() { }

  login(user: User) {
    console.log("in here with"+ user.username)
    this.user = user;
  }

  logout() {
    console.log("logging out")
    this.user = undefined
  }
}
