import { CanActivate, Route, Router } from '@angular/router';
import { MockAuthentificationService } from './services/mock-authentification.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: MockAuthentificationService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.user) {
      return true
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}