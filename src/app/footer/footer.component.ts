import { Component } from '@angular/core';
import { User } from '../user/user';
import { MockAuthentificationService } from '../services/mock-authentification.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  user? : User;

  constructor(private mockAuthenticationService : MockAuthentificationService) {}

  ngOnInit() {
    this.getAuthenticatedUser()
  }

  getAuthenticatedUser() {
    this.user = this.mockAuthenticationService.user
    return this.user
  }
  
}
