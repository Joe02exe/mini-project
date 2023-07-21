import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { v4 as uuidv4 } from 'uuid';
import { PasswordValidator } from '../passwordValidator/pass-word-validator';
import { UniqueUsernameValidator } from '../uniqueUsernameValidator/unique-username-validator';
import { BirthDateValidator } from '../birthDateValidator/birth-date-validator';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  hidePassword = true;
  hidePasswordConfirm = true;

  form: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'firstName' : new FormControl(null,[Validators.required]),
    'lastName': new FormControl(null, [Validators.required]),
    'username': new FormControl(null, [Validators.required], [ UniqueUsernameValidator.existingUsernameValidator(this.userService)]),
    'birthDate': new FormControl([Validators.required]),
    'password': new FormControl(null, [Validators.required]),
    'passwordConfirm': new FormControl(null, [Validators.required])
  },{ validators: [PasswordValidator.passwordsMatching, BirthDateValidator.dateBeforeTodayValidator]},
  );

  constructor(private userService: UserService, private router: Router) { }

  register() {
    this.userService.addUser({
      role: "user",
      birthDate: this.birthDate.value,
      lastName: this.lastName.value,
      firstName: this.firstName.value,
      email: this.email.value,
      password: this.password.value,
      username: this.username.value
    }).pipe(
      tap(_ => this.router.navigate(['../login']))
    ).subscribe();
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get firstName(): FormControl {
    return this.form.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.form.get('lastName') as FormControl;
  }
  get passwordConfirm(): FormControl {
    return this.form.get('passwordConfirm') as FormControl;
  }
  get birthDate(): FormControl {
    return this.form.get('birthDate') as FormControl;
  }

}
