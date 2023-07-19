
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { UserService } from "../services/user.service";
import { Observable, map } from "rxjs";

export class UniqueUsernameValidator {

  static existingUsernameValidator(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const username = control.value;
      return userService.getUser(username).pipe(map(
        (data) => {
          if (data == null){
            return null;
          }
          return { usernameExists: true }
        }
      ));
    };
  }
    
}


