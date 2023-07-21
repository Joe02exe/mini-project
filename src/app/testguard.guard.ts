import { CanActivateFn } from '@angular/router';

export const testguardGuard: CanActivateFn = (route, state) => {
  return true;
};
