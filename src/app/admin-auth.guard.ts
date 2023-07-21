import { CanActivate, Route, Router } from '@angular/router';
import { MockAuthentificationService } from './services/mock-authentification.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private authService: MockAuthentificationService, private router: Router) {}

  canActivate() : boolean {
    if (this.authService.user?.role == "admin") {
      return true;
    } else {
      this.router.navigate(['/forbidden']);
      return false;
    }
  }
}