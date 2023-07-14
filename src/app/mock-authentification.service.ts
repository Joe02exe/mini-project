import { Injectable } from '@angular/core';
import { User } from './user/user';

@Injectable({
  providedIn: 'root'
})
export class MockAuthentificationService {

  user?: User;

  constructor() { }

  login(user: User) {
    this.user = user;
  }

  logout() {
    this.user = undefined
  }
}
