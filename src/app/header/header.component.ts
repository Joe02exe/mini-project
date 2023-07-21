import { Component } from '@angular/core';
import { MockAuthentificationService } from '../services/mock-authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor (private mockAuthentificationService: MockAuthentificationService) {}

  isAdmin() : boolean {
    if (this.mockAuthentificationService.user?.role == 'admin'){
      return true;
    }
    return false;
  }

  isAuthenticated() : boolean {
    if (this.mockAuthentificationService.user){
      return true;
    }
    return false;
  }

  logout() {
    this.mockAuthentificationService.logout();
  }
}
